import express from 'express'
const router = express.Router()

import { authUser, 
    registerUser, 
    logoutUser, 
    getUserProfile, 
    updateUserProfile, 
    getUserById, 
    getUsers, 
    deleteUsers, 
    updateUser } from '../controllers/userController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').get(protect, admin, getUsers).post(registerUser)
router.route('/logout').post(logoutUser)
router.route('/auth').post(authUser)
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)
router.route('/:id').get(protect, admin, getUserById).delete(protect, admin, deleteUsers).put(protect, admin, updateUser)

export default router 
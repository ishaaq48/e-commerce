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

router.route('/').get(getUsers).post(registerUser)
router.route('/logout').post(logoutUser)
router.route('/login').post(authUser)
router.route('/profile').get(getUserProfile).put(updateUserProfile)
router.route('/:id').get(getUserById).delete(deleteUsers).put(updateUser)

export default router
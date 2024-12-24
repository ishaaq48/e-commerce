import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/userModel.js'

const authUser = asyncHandler(async (req, res) => {
    res.send('Auth user')
})

const registerUser = asyncHandler(async (req, res) => {
    res.send('register user')
})

const logoutUser = asyncHandler(async (req, res) => {
    res.send('Logout user')
})

const getUserProfile = asyncHandler(async (req, res) => {
    res.send('get user profile')
})

const updateUserProfile = asyncHandler(async (req, res) => {
    res.send('update user profile')
})

const getUserById = asyncHandler(async (req, res) => {
    res.send('get user by id')
})

const getUsers = asyncHandler(async (req, res) => {
    res.send('get users')
})

const deleteUsers = asyncHandler(async (req, res) => {
    res.send('delete user')
})

const updateUser = asyncHandler(async (req, res) => {
    res.send('update users')
})

export { 
    authUser, 
    registerUser, 
    logoutUser, 
    getUserProfile, 
    updateUserProfile, 
    getUserById, 
    getUsers, 
    deleteUsers, 
    updateUser } 
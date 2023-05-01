import express from 'express'
const router = express.Router()
import { authUser } from '../controllers/userController.js'

// be careful, '/' and not './' lol!
router.post('/login', authUser)

export default router
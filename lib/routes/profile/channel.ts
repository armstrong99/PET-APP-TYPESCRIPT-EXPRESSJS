import express from 'express'
import listChannels from '../../controllers/Profile/listChannels'

let router = express.Router()

router.post('/all', listChannels)

export default router
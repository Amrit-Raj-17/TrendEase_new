// import express from 'express'
// import { generateWithChatGPT } from '../controllers/chatgptController.js'

// const router = express.Router()
// router.post('/', generateWithChatGPT)

// export default router

// backend/routes/chatgptRoutes.js
import express from 'express'
import { generateWithChatGPT } from '../controllers/chatgptController.js'

const router = express.Router()

router.post('/', generateWithChatGPT)

export default router

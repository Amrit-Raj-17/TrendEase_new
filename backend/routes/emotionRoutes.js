import express from 'express'
import { detectEmotion } from '../controllers/emotionController.js'
import { loadModels } from '../utils/loadModels.js'

const router = express.Router()

let modelsLoaded = false

// Middleware to load models once
router.use(async (req, res, next) => {
  if (!modelsLoaded) {
    await loadModels()
    modelsLoaded = true
    console.log('✅ Face API models loaded')
  }
  next()
})

router.post('/detect', detectEmotion)

export default router

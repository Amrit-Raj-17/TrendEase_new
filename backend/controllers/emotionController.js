import * as faceapi from 'face-api.js'
import { Canvas, Image, ImageData, createCanvas, loadImage } from 'canvas'
import fs from 'fs'
import path from 'path'

// Patch canvas for face-api
faceapi.env.monkeyPatch({ Canvas, Image, ImageData })

export const detectEmotion = async (req, res) => {
  try {
    const { image } = req.body // base64 encoded image

    if (!image) return res.status(400).json({ error: 'Image data missing' })

    const buffer = Buffer.from(image.replace(/^data:image\/\w+;base64,/, ""), 'base64')
    const img = await loadImage(buffer)
    const canvas = createCanvas(img.width, img.height)
    const ctx = canvas.getContext('2d')
    ctx.drawImage(img, 0, 0)

    const detections = await faceapi.detectSingleFace(canvas, new faceapi.TinyFaceDetectorOptions()).withFaceExpressions()

    if (!detections) {
      return res.status(404).json({ error: 'No face detected' })
    }

    const emotion = Object.entries(detections.expressions)
      .reduce((a, b) => (a[1] > b[1] ? a : b))[0]

    res.json({ emotion })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
}

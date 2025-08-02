import * as faceapi from 'face-api.js'
import path from 'path'
import { canvas } from 'canvas'

const MODEL_PATH = path.join(process.cwd(), 'models/faceapi')

export const loadModels = async () => {
  await faceapi.nets.tinyFaceDetector.loadFromDisk(MODEL_PATH)
  await faceapi.nets.faceExpressionNet.loadFromDisk(MODEL_PATH)
}

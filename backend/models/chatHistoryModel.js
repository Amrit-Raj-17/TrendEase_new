// backend/models/chatHistoryModel.js
import mongoose from 'mongoose'

const chatSchema = new mongoose.Schema({
  user: { type: String, default: 'guest' },
  messages: [
    {
      role: { type: String, enum: ['user', 'bot'], required: true },
      text: { type: String, required: true }
    }
  ]
}, { timestamps: true })

export default mongoose.model('ChatHistory', chatSchema)

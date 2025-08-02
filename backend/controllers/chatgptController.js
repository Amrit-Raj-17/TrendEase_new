// import axios from 'axios'
// import dotenv from 'dotenv'
// dotenv.config()

// console.log('🔑 OPENAI KEY:', process.env.OPENAI_API_KEY)

// const openaiApiKey = process.env.OPENAI_API_KEY

// export const generateWithChatGPT = async (req, res) => {
//   const { prompt } = req.body

//   try {
//     const response = await axios.post(
//       'https://api.openai.com/v1/chat/completions',
//       {
//         model: 'gpt-3.5-turbo',
//         messages: [{ role: 'user', content: prompt }]
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${openaiApiKey}`,
//           'Content-Type': 'application/json'
//         }
//       }
//     )

//     res.json({
//       reply: response.data.choices[0].message.content
//     })
//   } catch (error) {
//     console.error('ChatGPT API Error:', error?.response?.data || error.message)
//     res.status(500).json({ error: 'ChatGPT API request failed' })
//   }
// }


import axios from 'axios'
import Product from '../models/Product.js'
import ChatHistory from '../models/chatHistoryModel.js'

export const generateWithChatGPT = async (req, res) => {
  const { prompt } = req.body

  if (!prompt) return res.status(400).json({ error: 'Prompt is required' })

  try {
    const lowerPrompt = prompt.toLowerCase()
    let reply = ''

    // ✅ 1. Product-based responses from MongoDB
    if (/latest|new arrivals|trending/.test(lowerPrompt)) {
      const latestProducts = await Product.find().sort({ createdAt: -1 }).limit(5)
      reply = latestProducts.length
        ? `🆕 Latest Products:\n` +
          latestProducts.map(p => `• ${p.title} - ₹${p.price}`).join('\n')
        : 'No products found.'
    } else if (/under\s?₹?\d+/.test(lowerPrompt)) {
      const match = lowerPrompt.match(/under\s?₹?(\d+)/)
      const price = match ? parseInt(match[1]) : 0
      const products = await Product.find({ price: { $lte: price } }).limit(5)
      reply = products.length
        ? `🛒 Products under ₹${price}:\n` +
          products.map(p => `• ${p.title} - ₹${p.price}`).join('\n')
        : `No products found under ₹${price}.`
    }

    // ✅ 2. Fallback to OpenAI if product data not matched
    if (!reply) {
      const OPENAI_API_KEY = process.env.OPENAI_API_KEY
      const openaiRes = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-4o-mini', // or 'gpt-4o-mini'
          messages: [
            {
              role: 'system',
              content: 'You are a helpful shopping assistant for TrendEase.'
            },
            { role: 'user', content: prompt }
          ]
        },
        {
          headers: {
            Authorization: `Bearer ${OPENAI_API_KEY}`,
            'Content-Type': 'application/json'
          }
        }
      )

      reply = openaiRes.data?.choices?.[0]?.message?.content || 'Sorry, no reply.'
    }

    // ✅ 3. Save to MongoDB
    await ChatHistory.create({
      user: 'guest',
      messages: [
        { role: 'user', text: prompt },
        { role: 'bot', text: reply }
      ]
    })

    return res.json({ reply })
  } catch (error) {
    console.error('❌ ChatGPT API Error:', error.response?.data || error.message)
    return res.status(500).json({ error: 'Failed to generate response' })
  }
}

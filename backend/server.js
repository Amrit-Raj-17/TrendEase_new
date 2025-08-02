import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import authRoutes from './routes/authRoutes.js'
import productRoutes from './routes/productRoutes.js'
import cartRoutes from './routes/cartRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import chatgptRoutes from './routes/chatgptRoutes.js'
import emotionRoutes from './routes/emotionRoutes.js'
dotenv.config()
connectDB()

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/products', productRoutes)
app.use('/api/cart', cartRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/chatgpt', chatgptRoutes)
app.use('/api/emotion', emotionRoutes)

const PORT = process.env.PORT || 5000

app.get('/api', (req, res) => {
  res.send('🛠️ TrendEase API is running!');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

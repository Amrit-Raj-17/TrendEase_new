import User from '../models/User.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const register = async (req, res) => {
  const { name, email, password } = req.body
  const hashed = await bcrypt.hash(password, 10)
  const user = new User({ name, email, password: hashed })
  await user.save()
  res.json({ message: 'Registered successfully' })
}

export const login = async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (!user) return res.status(400).json({ message: 'User not found' })

  const match = await bcrypt.compare(password, user.password)
  if (!match) return res.status(400).json({ message: 'Incorrect password' })

  const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET)
  res.json({ token })
}

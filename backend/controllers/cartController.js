import Cart from '../models/Cart.js'

export const getCart = async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user.id })
  res.json(cart || { items: [] })
}

export const updateCart = async (req, res) => {
  const { items } = req.body
  const cart = await Cart.findOneAndUpdate(
    { userId: req.user.id },
    { userId: req.user.id, items },
    { upsert: true, new: true }
  )
  res.json(cart)
}

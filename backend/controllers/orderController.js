import Order from '../models/Order.js'

export const createOrder = async (req, res) => {
  const { products, total } = req.body
  const order = new Order({ userId: req.user.id, products, total })
  await order.save()
  res.json(order)
}

export const getOrders = async (req, res) => {
  const orders = await Order.find({ userId: req.user.id })
  res.json(orders)
}

import { useEffect, useState } from 'react'
import api from '../utils/axios'

const HomePage = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    api.get('/products')
      .then((res) => setProducts(res.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="grid grid-cols-3 gap-4 p-8">
      {products.map((p) => (
        <div key={p._id} className="border p-4 shadow">
          <img src={p.image} alt={p.title} className="w-full h-40 object-cover mb-2" />
          <h2 className="text-lg font-semibold">{p.title}</h2>
          <p>{p.price} INR</p>
        </div>
      ))}
    </div>
  )
}

export default HomePage



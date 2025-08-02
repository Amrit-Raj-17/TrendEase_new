import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* 🔝 Global header or navbar (optional) */}
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-blue-700">🛍️ TrendEase</h1>
      </header>

      {/* 🔁 Renders the nested route (like /gemini, /cart, etc.) */}
      <main>
        <Outlet />
      </main>

      {/* 🔔 Global toast notifications */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  )
}

export default App


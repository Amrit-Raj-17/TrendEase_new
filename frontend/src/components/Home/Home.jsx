import React from 'react'
import Hero from '../HeroSection/Hero'
import LatestCollection from '../LatestCollection'
import OurPolicy from '../OurPolicy'
import NewsletterBox from '../NewsletterBox'
import { useNavigate } from 'react-router-dom'
import { FaRobot } from 'react-icons/fa'

function Home() {
  const navigate = useNavigate()

  return (
    <div className="relative min-h-screen">
      <Hero />
      <LatestCollection />
      <OurPolicy />
      <NewsletterBox />

      {/* 🤖 Floating Chatbot Icon */}
      <button
        onClick={() => navigate('/chat')}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg z-50"
        title="Ask Gemini AI"
      >
        <FaRobot size={24} />
      </button>
    </div>
  )
}

export default Home

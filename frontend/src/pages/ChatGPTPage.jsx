import { useState, useEffect, useRef } from 'react'
import axios from '../utils/axios'
import {
  FaRobot,
  FaPaperPlane,
  FaTrash,
  FaMicrophone,
  FaVolumeMute,
  FaVolumeUp,
} from 'react-icons/fa'

const ChatGPTPage = () => {
  const [prompt, setPrompt] = useState('')
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem('chat-history')
    return saved ? JSON.parse(saved) : []
  })
  const [loading, setLoading] = useState(false)
  const [listening, setListening] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const isMutedRef = useRef(false)

  const chatRef = useRef(null)

  useEffect(() => {
    localStorage.setItem('chat-history', JSON.stringify(messages))
  }, [messages])

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight
    }
  }, [messages, loading])

  const toggleMute = () => {
    setIsMuted((prev) => {
      const next = !prev
      isMutedRef.current = next
      return next
    })
  }

  const speak = (text) => {
    if (isMutedRef.current) return
    const synth = window.speechSynthesis
    const utter = new SpeechSynthesisUtterance(text)
    utter.lang = 'en-US'
    synth.speak(utter)
  }

  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition
    if (!SpeechRecognition) {
      alert('Speech recognition not supported')
      return
    }

    const recognition = new SpeechRecognition()
    recognition.lang = 'en-US'
    recognition.interimResults = false
    recognition.maxAlternatives = 1

    recognition.onresult = (event) => {
      const voiceText = event.results[0][0].transcript
      setPrompt(voiceText)
      setListening(false)
    }

    recognition.onerror = () => setListening(false)

    recognition.start()
    setListening(true)
  }

  const sendMessage = async (e) => {
    e.preventDefault()
    if (!prompt.trim()) return

    const newMessages = [...messages, { type: 'user', text: prompt }]
    setMessages(newMessages)
    setPrompt('')
    setLoading(true)

    try {
      const res = await axios.post('/chatgpt', { prompt })
      const reply = res.data?.reply || 'No response from ChatGPT'
      const cleanReply = reply
        .replace(/\*\*(.*?)\*\*/g, '$1')      // Remove bold
        .replace(/^[-*]\s/gm, '')             // Remove bullet points
        .replace(/^\d+\.\s/gm, '')            // Remove numbered list
        .replace(/\n/g, '<br />')             // Newlines to <br />
      setMessages([...newMessages, { type: 'bot', text: cleanReply }])
      speak(cleanReply)
    } catch (err) {
      console.error(err)
      setMessages([
        ...newMessages,
        { type: 'bot', text: '⚠️ Error: Could not get response.' },
      ])
    } finally {
      setLoading(false)
    }
  }

  const clearChat = () => {
    localStorage.removeItem('chat-history')
    setMessages([])
  }

  return (
    <div className="min-h-screen bg-gradient-to-tr from-white to-blue-50 px-4 py-6">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-blue-700 text-white px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <FaRobot /> TrendEase AI Assistant
          </h2>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleMute}
              className="text-white hover:text-yellow-200 transition"
              title={isMuted ? 'Unmute voice' : 'Mute voice'}
            >
              {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
            </button>
            <button
              onClick={clearChat}
              className="text-sm text-white hover:underline flex items-center gap-1"
              title="Clear Chat"
            >
              <FaTrash /> Reset
            </button>
          </div>
        </div>

        {/* Chat Area */}
        <div
          ref={chatRef}
          className="h-[460px] overflow-y-auto p-6 bg-gray-50"
        >
          {messages.length === 0 && (
            <p className="text-gray-400 italic text-center mt-20">
              Ask me anything about your shopping needs...
            </p>
          )}
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-4 ${
                msg.type === 'user' ? 'text-right' : 'text-left'
              }`}
            >
              <div
                className={`inline-block px-4 py-2 rounded-xl text-sm max-w-xs ${
                  msg.type === 'user'
                    ? 'bg-blue-600 text-white ml-auto'
                    : 'bg-gray-200 text-black'
                }`}
              >
                <span
                  dangerouslySetInnerHTML={{
                    __html: msg.text,
                  }}
                />
              </div>
            </div>
          ))}
          {loading && (
            <p className="text-center text-sm text-blue-500 italic">
              Assistant is typing...
            </p>
          )}
        </div>

        {/* ✅ Quick Prompts */}
        <div className="flex gap-2 flex-wrap mb-3 px-4 mt-2">
          {[
            'Show me latest offers',
            'Top t-shirt brands',
            'Products under ₹1000',
            'Add something to cart',
            'What are trending sneakers?',
          ].map((text, i) => (
            <button
              key={i}
              className="bg-blue-100 hover:bg-blue-200 text-sm text-blue-800 px-3 py-1 rounded-full transition"
              onClick={() => setPrompt(text)}
            >
              {text}
            </button>
          ))}
        </div>

        {/* Input Area */}
        <form
          onSubmit={sendMessage}
          className="flex items-center gap-2 border-t px-4 py-3 bg-white"
        >
          <input
            type="text"
            className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none"
            placeholder="Ask something..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full"
            title="Send"
          >
            <FaPaperPlane />
          </button>
          <button
            type="button"
            onClick={startListening}
            className={`p-2 rounded-full ${
              listening ? 'bg-red-500' : 'bg-green-500'
            } text-white`}
            title="Voice Input"
          >
            <FaMicrophone />
          </button>
        </form>
      </div>
    </div>
  )
}

export default ChatGPTPage

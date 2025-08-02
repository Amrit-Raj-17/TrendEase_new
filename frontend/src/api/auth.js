// src/api/auth.js
import api from '../utils/axios'

export const loginUser = async (email, password) => {
  const res = await api.post('/auth/login', { email, password })
  localStorage.setItem('token', res.data.token)
  return res.data
}

export const registerUser = async (userData) => {
  const res = await api.post('/auth/register', userData)
  return res.data
}
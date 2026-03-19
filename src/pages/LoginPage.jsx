import React from 'react'
import Login from '../components/Login'
import { Toaster } from 'react-hot-toast'

const LoginPage = () => {
  return (
    <>
      <Toaster />
      <Login />
    </>
  )
}

export default LoginPage
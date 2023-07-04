import React, { useState } from 'react'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom'

function Login() {

    const [user,setUser]=useState('')
    const auth=useAuth()
    const navigate=useNavigate()

    const handleLogin=(user)=>{
        auth.login(user)
        navigate('/')
    }

  return (
    <div>
        <label>
            username :<input type='text' onChange={e=>setUser(e.target.value)} />
           
        </label>
        <button onClick={handleLogin}>login</button>
    </div>
  )
}

export default Login
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FormInput from '../components/FormInput.js'
import axios from 'axios'
import { setToken } from '../helpers/auth'
import image1 from "../styles/images/gaming.jpg"

const Register = () => {
  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  })

  const [errorInfo, setErrorInfo] = useState({})
  const [isError, setIsError] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()

    const config = {
      method: 'post',
      url: '/api/auth/register/',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    }

    try {
      const response = await axios(config).catch(handleError)
      setToken(response.data.token)
      setIsError(false)
      navigate('/login')
    } catch (err) {
      console.log(err)
      setIsError(true)
    }
  }

  const handleError = (error) => {
    if (error.response) {
      setErrorInfo(error.response.data)
      setIsError(true)
    }
  }
  const handleFormChange = (event) => {
    const { id, value } = event.target
    setData({
      ...data,
      [id]: value,
    })
  }
  const formInputProps = { data, errorInfo, handleFormChange }

  return (
    <div className="register_form_style">
          <div>  
            <p> Thinking of buying? Think no more and try it first!</p>
          <img src= { image1 }/>
            </div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="register_header">
            <h2>Sign Up</h2>
          </div>
          <FormInput
            className="input-field"
            id="username"
            type="text"
            name="Username"
            {...formInputProps}
          />
          <FormInput
            className="input-field"
            id="email"
            type="email"
            name="Email"
            {...formInputProps}
          />
          <FormInput
            className="input-field"
            id="password"
            type="password"
            name="Password"
            {...formInputProps}
          />
          <FormInput
            className="input-field"
            id="password_confirmation"
            type="password"
            name="Password Confirmation"
            {...formInputProps}
          />
          <div>
            <input className="action" type="submit" value="Sign Up" />
          </div>
          {isError ? (
            <div className="error">
              <p>Error. Please try again.</p>
            </div>
          ) : (
            <></>
          )}
        </form>
      </div>
    </div>
  )
}

export default Register

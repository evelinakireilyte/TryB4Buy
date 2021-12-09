import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { setToken, setUser } from '../helpers/auth.js'
import FormInput from '../components/FormInput.js'
import axios from 'axios'
import image5 from "../styles/images/gaming-newbies-stadia-videoSixteenByNineJumbo1600.jpg"

const Login = ({ setIsLoggedIn }) => {
  const [data, setData] = useState({
    username: '',
    password: '',
  })
  const [errorInfo, setErrorInfo] = useState({})
  const [isError, setIsError] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()

    const config = {
      method: 'post',
      url: '/api/auth/login/',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    }

    try {
      const response = await axios(config).catch(handleError)
      setToken(response.data.token)
      setUser(response.data.id)
      setIsError(false)
      setIsLoggedIn(true)
      navigate('/')
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
    <div className="login_wrapper">
            <div><p> Here you can give, take or do both!</p>
            <img src= { image5 }/>
            </div>
      <div className="login_form_style">
        <form onSubmit={handleSubmit}>
          <div className="login_header">
            <h2>Log In</h2>
          </div>
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

          <input className="action" type="submit" value="Log In" />
          {isError ? (
            <div className="error">
              <p>Error. Please try again</p>
            </div>
          ) : (
            <></>
          )}
        </form>
      </div>
    </div>
  )
}

export default Login

import React from 'react'
import { getToken } from '../helpers/auth'
import { useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const DeleteItem = () => {
  const [errorInfo, setErrorInfo] = useState({})
  const [isError, setIsError] = useState(false)
  const { id } = useParams()
  const navigate = useNavigate()

  const handleError = (error) => {
    if (error.response) {
      setErrorInfo(error.response.data)
      setIsError(true)
    }
  }

  const handleDelete = async (event) => {
    const config = {
      method: 'delete',
      url: `/api/items/${id}`,
      headers: {
        Authorization: `Bearer ${getToken()}`,
        'Content-Type': 'application/json',
      },
    }
    const response = await axios(config).catch(handleError)
    console.log('handle delete')
    navigate('/items')
    try {
      setIsError(false)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <Button variant="outline-primary" size="sm" onClick={handleDelete}>
        Delete Post
      </Button>
    </div>
  )
}

export default DeleteItem

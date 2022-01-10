import React from 'react'
import { getToken } from '../helpers/auth'
import { useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const DeleteItem = () => {
  const [isError, setIsError] = useState(false)
  const { id } = useParams()
  const navigate = useNavigate()

  const handleError = (error) => {
    if (error.response) {
      setIsError(true)
    }
  }

  const handleDelete = async () => {
    const config = {
      method: 'delete',
      url: `/api/items/detail/${id}`,
      headers: {
        Authorization: `Bearer ${getToken()}`,
        'Content-Type': 'application/json',
      },
    }
    const response = await axios(config).catch(handleError)
    console.log(response, 'handle delete')
    navigate('/items')
  }

  return (
    <div>
      <Button variant="outline-primary" size="sm" onClick={handleDelete}>
        Delete Post
      </Button>
      {isError ? (
        <div className="error">
          <p>There appears to have been an error. Please try again.</p>
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

export default DeleteItem

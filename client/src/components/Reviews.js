import axios from 'axios'
import { useParams } from 'react-router-dom'
import { getAxiosRequestConfig } from '../helpers/api'
import { useState } from 'react'
import { getUser } from '../helpers/auth.js'

const Reviews = () => {
  const [errorInfo, setErrorInfo] = useState({})
  const [isError, setIsError] = useState(false)
  const { id } = useParams()

  const [comment, setComment] = useState({
    text: '',
    item: parseInt(id),
    owner: getUser(),
  })

  const handleError = (error) => {
    if (error.response) {
      setErrorInfo(error.response.data)
      setIsError(true)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log('handleSubmit')

    try {
      const config = getAxiosRequestConfig('reviews/', comment)
      const response = await axios(config).catch(handleError)
      console.log(response)
      if (response.status > 199 && response.status < 300) {
        setComment({
          text: '',
        })
        window.location.reload()
      }

      setIsError(false)
    } catch (err) {
      console.log(err)
    }
  }

  const handleFormChange = async (e) => {
    const { name, value } = e.target
    setComment({
      ...comment,
      [name]: value,
    })
    console.log(comment)
  }

  const formInputProps = { data: comment, errorInfo, handleFormChange }

  return (
    <section>
      <form className="review" onSubmit={handleSubmit}>
        <input
          className="review-input"
          name="text"
          type="text"
          value={comment.text}
          placeholder="Comments"
          onChange={handleFormChange}
          {...formInputProps}
        />
        <input className="action" type="submit" value="Submit Review" />
        {isError ? (
          <div className="error">
            <p>Error. Please login to leave a review. </p>
          </div>
        ) : (
          <></>
        )}
      </form>
    </section>
  )
}

export default Reviews

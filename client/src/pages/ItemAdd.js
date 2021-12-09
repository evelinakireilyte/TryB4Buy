import axios from 'axios'
import { useState } from 'react'
import ItemForm from '../components/ItemForm.js'
import { useNavigate } from 'react-router-dom'
import { getToken, getUser } from '../helpers/auth.js'
import image1 from "../styles/images/dbi-e-mailing.jpg"

const ItemAdd = () => {
  const navigate = useNavigate()

  const [data, setData] = useState({
    title: '',
    make: '',
    description: '',
    retail_price: '',
    try_it_charge: '',
    location: '',
    owner: getUser(),
    image: '',
  })

  const [errorInfo, setErrorInfo] = useState({})
  const [ isError, setIsError ] = useState(false)

  const handleError = (error) => {
    if (error.response) {
      setErrorInfo(error.response.data)
      setIsError(true)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const config = {
      method: 'post',
      url: '/api/items/',
      headers: { 
        Authorization: `Bearer ${getToken()}`, 
        'Content-Type': 'application/json',
      },
      data: data,
    }
    console.log(data)
    try {
      const response = await axios(config).catch(handleError)
      console.log(response.data)
      setIsError(false)
      navigate('/items')
    } catch (err) {
      console.log(err)
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
    <div className="item_add_form">
    <div> 
          <p>Share  |  Connect  |  Earn</p>
          <img src= { image1 }/>
    </div>
      <div >
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <h2>Post Your Item Below</h2>
            </div>
          </div>
          <ItemForm
            className="input-field"
            formInputProps={formInputProps}
            setData={setData}
            data={data}
          />
          <div>
            <input className="action" type="submit" value="Post" />
          </div>
          {isError ? (
            <div className="error">
              <p>Error, something went wrong. Please try again</p>
            </div>
          ) : (
            <></>
          )}
        </form>
      </div>
    </div>
  )
}

export default ItemAdd

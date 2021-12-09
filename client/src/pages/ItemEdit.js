import axios from 'axios'
import { useState, useEffect } from 'react'
import ItemForm from '../components/ItemForm.js'
import { getAxiosPutRequestConfig } from '../helpers/api'
import { useNavigate, useParams } from 'react-router-dom'
import { getUser } from '../helpers/auth.js'

const ItemEdit = () => {
  const navigate = useNavigate()
  const { id } = useParams()

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

  useEffect(() => {
    async function fetchItem(id) {
      const config = {
        method: 'get',
        url: `/api/items/${id}`,
        headers: {},
      }

      const response = await axios(config)
      setData(response.data)
    }
    fetchItem(id)
  }, [id])

  const handleError = (error) => {
    if (error.response) {
      setErrorInfo(error.response.data)
      setIsError(true)
    }
  }

  const handleSubmit = async (event) => {
    // event.preventDefault()
    const config = getAxiosPutRequestConfig(`items/${id}/`, data, 'put')
    navigate(`/items/${id}`)
    try {
      const response = await axios(config).catch(handleError)
      console.log(response.data)
      setIsError(false)
    } catch (err) {
      console.log(err)
    }
  }
  const handleFormChange = (event) => {
    const { id, value } = event.target
    setData({
      ...data,
      [id]: value,
    })
  }

  const formInputProps = { data: data, errorInfo, handleFormChange }

  return (
    <div className="item-edit">
    
      <div className="item-edit_form">
        <form className="card-form" onSubmit={handleSubmit}>
          <div className="card">
              <h2 className="card-heading">Edit Your Item</h2>
          </div>
          <ItemForm
            className="input-field"
            formInputProps={formInputProps}
            setData={setData}
            data={data}
          />
          <div>
            <input className="action" type="submit" value="Edit Item" />
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

export default ItemEdit

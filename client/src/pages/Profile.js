import { useState, useEffect } from 'react'
import axios from 'axios'
import { getToken } from '../helpers/auth'
import ItemCard from '../components/ItemCard'
import { getUser } from '../helpers/auth'

const Profile = () => {
  const [items, setItems] = useState([])
  const [username, setUsername] = useState('')
  const id = getUser()

  useEffect(() => {
    async function fetchUserInfo(id) {
      const config = {
        method: 'get',
        url: `/api/auth/${id}/`,
        headers: {
          Authorization: `Bearer ${getToken()}`,
          'Content-Type': 'application/json',
        },
      }

      const response = await axios(config)
      console.log(response.data)
      setItems(response.data.items)
      setUsername(response.data.username)
    }
    fetchUserInfo(id)
  }, [id])
  console.log(items)

  return (
    <div className="profile">
      <h1>Hi {username}!</h1>
      <h3>Wishlist</h3>
      <div className="user_wishlist">
        <p> Your wishlist is currently empty...</p>
      </div>
      <h3>Posts</h3>
      <div className="user_items">
        {items.length > 0 ? (
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                <ItemCard {...item} />
              </li>
            ))}
          </ul>
        ) : (
          <p> You have not made any posts yet...</p>
        )}
      </div>
    </div>
  )
}

export default Profile

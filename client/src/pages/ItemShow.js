import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { getToken } from '../helpers/auth'
import { Link } from 'react-router-dom'
import DeleteItem from '../components/DeleteItem.js'
import Reviews from '../components/Reviews.js'

const ItemShow = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  useEffect(() => {
    if (getToken()) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  }, [])

  const [item, setItem] = useState([])
  const [reviews, setReviews] = useState([])
  const [owner, setOwner] = useState([])
  const { id } = useParams()

  async function fetchItem(id) {
    const config = {
      method: 'get',
      url: `/api/items/detail/${id}`,
      headers: {},
    }

    const response = await axios(config)
    console.log(response)
    setItem(response.data)
    setReviews(response.data.reviews)
    setOwner(response.data.owner)
  }

  useEffect(() => {
    fetchItem(id)
  }, [id])

  return (
    <div>
      <section>
        <div className="item_top_section">
          <div>
            <h3>{item.title}</h3>
            <div className="item_info">
              <h4>TryIt Charge: </h4>
              <p>£ {item.try_it_charge}</p>
            </div>
            <div className="item_info">
              <h4>Item Location: </h4>
              <p>{item.location}</p>
            </div>
            {isLoggedIn ? (
              <>
                <div className="item_show_buttons">
                  <button variant="outline-primary" size="sm">
                    Watch this item
                  </button>
                  <div>
                    <Link to={`/items/${id}/edit`}>
                      <button variant="outline-primary" size="sm">
                        Edit Post
                      </button>
                    </Link>
                  </div>
                  <div>
                    <DeleteItem />
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
          <div>
            <img src={item.image} alt={item.title} />
          </div>
        </div>
        <div className="item_info_bottom">
          <div className="item_info_section">
            <h3>About the Item</h3>
            <div className="item_info">
              <h4>Brand: </h4>
              <p>{item.make}</p>
            </div>
            <div className="item_info">
              <h4>Retail Price: </h4>
              <p>£ {item.retail_price}</p>
            </div>
            <div className="item_info">
              <h4 className="description">Description: </h4>
              <p>{item.description}</p>
            </div>
          </div>
          <div className="owner_info">
            <h3>Contact {owner.username} to try the item </h3>
            <div className="item_info">
              <h4>Email: </h4>
              <p>{owner.email}</p>
            </div>
          </div>
          <div className="reviews_wrapper">
            <h3>Leave a review</h3>
            <Reviews />
            <h3>Reviews</h3>
            <div className="reviews_list">
              <ul>
                {reviews?.map((review) => (
                  <li key={review.id}>
                    <p>{review.owner.username}</p>
                    <p>{review.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default ItemShow

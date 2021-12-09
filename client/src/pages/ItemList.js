import { useState, useEffect } from 'react'
import ItemCard from '../components/ItemCard'
import { fetchItems } from '../helpers/api'

const ItemList = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetchItems().then(setItems)
  }, [])

  return (
    <>
      <div className="item_list_wrapper">
        <div className="top_section_wrap">
        <p className="list_top_p"> Browse or search items you are interested in </p>
        <div className="search_wrap">
          <div className="search">
          <input type="text" class="searchTerm" placeholder="What are you looking for?"/>
          <button type="submit" class="searchButton">Search
          </button>
        </div>
        </div>
        <div className="card_list_wrapper">
        <ul >
          {items.map((item) => (
            <li key={item.id}>
              <ItemCard {...item} />
            </li>
          ))}
        </ul>
        </div>
      </div>
      </div>
    </>
  )
}

export default ItemList

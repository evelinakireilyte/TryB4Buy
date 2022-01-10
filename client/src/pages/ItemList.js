import { useState, useEffect } from 'react'
import ItemCard from '../components/ItemCard'
import { fetchItems } from '../helpers/api'

const ItemList = () => {
  const [items, setItems] = useState([])
  const [filteredItems, setFilteredItems] = useState(items)
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    fetchItems().then(setItems)
  }, [])
  console.log(items)

  const handleSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  useEffect(() => {
    const lowerCaseSearch = searchValue.toLowerCase()
    setFilteredItems(
      items.filter(
        (item) =>
          item.location.toLowerCase().includes(lowerCaseSearch.toLowerCase()) ||
          item.make.toLowerCase().includes(lowerCaseSearch) ||
          item.owner.username.toLowerCase().includes(lowerCaseSearch) ||
          item.owner.email.toLowerCase().includes(lowerCaseSearch) ||
          item.title.toLowerCase().includes(lowerCaseSearch) ||
          item.try_it_charge.toLowerCase().includes(lowerCaseSearch) ||
          item.retail_price.toLowerCase().includes(lowerCaseSearch)
      )
    )
  }, [searchValue])
  console.log(items)
  return (
    <>
      <div className="item_list_wrapper">
        <div className="top_section_wrap">
          <p className="list_top_p">
            {' '}
            Browse or search items you are interested in{' '}
          </p>
          <div className="search_wrap">
            <div className="search">
              <input
                onChange={handleSearchInput}
                value={searchValue}
                type="text"
                className="searchTerm"
                placeholder="What are you looking for?"
              />
              <button type="submit" className="searchButton">
                Search
              </button>
            </div>
          </div>
          <div className="card_list_wrapper">
            <ul>
              {filteredItems.map((item) => (
                <li key={item.id}>
                  <ItemCard {...item} />
                </li>
              ))}
            </ul>
            <ul>
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

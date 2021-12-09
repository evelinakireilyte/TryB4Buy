import { Link } from 'react-router-dom'
import { FaRegHeart } from 'react-icons/fa';

const ItemCard = ({
  title,
  try_it_charge,
  id,
  image,
  location,
}) => {

  return (
    <>
      <div className="item_card_wrapper">
        <Link to={`/items/${id}`}>
          <div className="card_wrapper">
            <div className="card_image">
              <img src={image} alt={title} />
            </div>
            <div>
              <h4 className="ind_card_title">{title}</h4>

              <div className="top_text">
                <p >TRY IT: £{try_it_charge}</p>
                <FaRegHeart/>
              </div>
              <p className="ind_card_bottom">LOCATION: {location}</p>
            </div>

          </div>
        </Link>
      </div>
    </>
  )
}

export default ItemCard

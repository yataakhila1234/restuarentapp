import Quantity from './Quantity'
import './index.css'

const FoodItems = props => {
  const {foodItemsList, setTotalQuantity} = props
  // console.log(foodItemsList[0])

  return (
    <ul>
      {foodItemsList.map(dish => (
        <li className="fooditems-container" key={dish.dish_id}>
          <div
            className={`dish-category-container type-${dish.dish_Type}-container`}
          >
            <p className={`dish-category-item type-${dish.dish_Type}-item`} />
          </div>
          <div className="dish-details">
            <p className="dish-name">{dish.dish_name}</p>
            <p className="dish-price">{`SAR ${dish.dish_price}`}</p>
            <p className="dish-description">{dish.dish_description}</p>
            {dish.dish_Availability ? (
              <Quantity setTotalQuantity={setTotalQuantity} />
            ) : (
              <p className="dish-not-available">Not available</p>
            )}
            {dish.addonCat.length > 0 ? (
              <button className="dish-addons" type="button">
                Customizations available
              </button>
            ) : (
              ''
            )}
          </div>
          <p className="dish-calories">{`${dish.dish_calories} calories `}</p>
          <img
            className="dish-image"
            src={dish.dish_image}
            alt={dish.dish_name}
          />
        </li>
      ))}
    </ul>
  )
}

export default FoodItems

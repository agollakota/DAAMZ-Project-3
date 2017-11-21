/*
Reducer List:
  restaurant
  list

State:
  restaurant = {
    name:,
    location:,
    rating:,
    price:,
    phoneNumber:,
    menuLink:,
    reviews:,
  },
  list : [ restaurant ]
*/

import { combineReducers } from 'redux'
import restraunt from './restraunt'
import favorites from './favorites'

const FoodSwipe = combineReducers({
  restraunt,
	favorites
})

export default FoodSwipe

/*
Reducer List:
  restaurant
  list

State:
  restaurant = {
    name:,
    location:,
    rating: 0-5,
    price: 0-4,
    phoneNumber: phone,
    websiteLink: URL,
    reviews:,
  },
  list : [ restaurant ]
*/

import { combineReducers } from 'redux'
import restraunts from './restraunts'
import favorites from './favorites'

const FoodSwipe = combineReducers({
  restraunts,
	favorites
})

export default FoodSwipe;

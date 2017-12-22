/*
State: {
	search: {
		query: {},
		error: '',
		loading: false,
		restaurants: [restaurant]
	},
	favorites: {
    list: [restaurant]
  }
}

  restaurant: {
    name:,
    location:,
    rating: 0-5,
    price: 0-4,
    phoneNumber: phone,
    websiteLink: URL,
    reviews:,
  }
*/

import { combineReducers } from 'redux'
import RestaurantReducer from './RestaurantReducer'
import FavoritesReducer from './FavoritesReducer'

export default combineReducers({
  search: RestaurantReducer,
	favorites: FavoritesReducer,
});

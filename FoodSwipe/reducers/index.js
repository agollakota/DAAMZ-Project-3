/*
State: {
	search: {
		query: {},
		error: '',
		loading: false,
		restraunts: [restraunt]
	},
	favorites: [restraunt]
}

  restraunt: {
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
import RestrauntReducer from './RestrauntReducer'
import FavoritesReducer from './FavoritesReducer'
import CardReducer from './CardReducer'

export default combineReducers({
  search: RestrauntReducer,
	favorites: FavoritesReducer,
	card: CardReducer
});

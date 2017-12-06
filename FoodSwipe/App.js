import React, { Component } from 'react';
import { View } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { NativeRouter, Route } from 'react-router-native'

import reducers from './reducers'

import Header from './components/Header'
import FilterPage from './components/FilterPage'
import CardsContainer from './containers/CardsContainer'
import RestaurantList from './components/RestaurantList';
// import FavoritesList from './containers/FavoritesList'

export default class App extends Component {
	// const store = createStore(reducer)
  // <Provider store={store}>

  render() {
    return (
         <Provider store={createStore(reducers)}>
					<View style={{ flex: 1 }}>
						<Header headerText={"Food Swipe"} />
              <RestaurantList />
					</View>
          </Provider>

    );
  }
}
// TODO: <Route path="/favorites" component={FavoritesList}/>
//<Route exact path="/" component={FilterPage} />
//<Route path="/cards" component={CardsContainer} />

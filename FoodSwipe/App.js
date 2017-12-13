
import React, { Component } from 'react';
import { View, } from 'react-native';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { NativeRouter,
	Route,
	Scene,
	nativeHistory
} from 'react-router-native'
import createMemoryHistory from 'history/createMemoryHistory'
import thunk from 'redux-thunk'

import reducer from './reducers'

// import NavHeader from './components/NavHeader'
import HeaderComp from './components/Header'
import FilterContainer from './containers/FilterContainer'
import CardsContainer from './containers/CardsContainer'
import FavoritesContainer from './containers/FavoritesContainer';

const store = createStore(reducer, applyMiddleware(thunk));

export default class App extends Component{
  render() {
    return (
			<Provider store={store}>
				<NativeRouter history={nativeHistory}>
					<View style={{flex: 1}}>
						<HeaderComp />
						<Route exact path="/" component={FilterContainer}/>
						<Route path="/cards" component={CardsContainer}/>
            <Route path="/favorites" component={FavoritesContainer}/>
					</View>
				</NativeRouter>
			</Provider>
    );
  }
}

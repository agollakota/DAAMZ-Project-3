
import React, { Component } from 'react';
import { View } from 'react-native';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { NativeRouter, Route } from 'react-router-native'
import thunk from 'redux-thunk'
import { TabNavigator } from 'react-navigation';
import reducer from './reducers'
import Navigator from './components/Navigator'
import Header from './components/Header'
import FilterContainer from './containers/FilterContainer'
import CardsContainer from './containers/CardsContainer'



const store = createStore(reducer, applyMiddleware(thunk));



export default class App extends Component{
  render() {
    return (
			<Provider store={store}>
				<NativeRouter>
					<View style={{flex: 1}}>

						<Header/>
                <Navigator/>

					</View>
				</NativeRouter>
			</Provider>


    );
  }
}
// TODO: <Route path="/favorites" component={FavoritesList}/>

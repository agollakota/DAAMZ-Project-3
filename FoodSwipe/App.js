import MapView from 'react-native-maps';



//import MapView, {PROVIDER_GOOGLE} from "react-native-maps";

import reducer from './reducers'



import Header from './components/Header'

import FilterContainer from './containers/FilterContainer'

import CardsContainer from './containers/CardsContainer'

// import FavoritesList from './containers/FavoritesList'



const store = createStore(reducer, applyMiddleware(thunk));

var lat =  42.00;

var longitude = -87.66;


import React, { Component } from 'react';
import { View } from 'react-native';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { NativeRouter, Route } from 'react-router-native'
import thunk from 'redux-thunk'

import reducer from './reducers'

import Header from './components/Header'
import FilterContainer from './containers/FilterContainer'
import CardsContainer from './containers/CardsContainer'
// import FavoritesList from './containers/FavoritesList'

const store = createStore(reducer, applyMiddleware(thunk));

export default class App extends Component{

render()   {

      return (

      <View style={styles.container}>



         <MapView style={styles.map}

              region={{

                  latitude: lat,

                  longitude: longitude,

                  latitudeDelta: 0.1,

                  logitudeDelta: 0.1



                 }}



         >



            <MapView.Marker

                 coordinate={{

                   latitude: lat,

                   longitude: long

                   }}

                 title={'You are here'}

                 />

          </MapView>

        </View>

    );

  }



}





cons styles = StyleSheet.create({



     container:{

         position: 'absolute',

         top: 0,

         left: 0,

         bottom: 0,

         right: 0,

         justifyContent: 'flex-end',

         alignItems: 'center'

      },



     map: {

         position: 'absolute',

         top: 0,

         left: 0,

         bottom: 0,

         right: 0

     }

});
// TODO: <Route path="/favorites" component={FavoritesList}/>

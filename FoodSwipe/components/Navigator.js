import { TabNavigator, StackNavigator } from 'react-navigation';
import React from 'react';
import { View } from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome';

import FilterPage from './FilterPage';
import SwipeCards from './SwipeCards';
import FavoritesList from './RestaurantList'


const Routes = StackNavigator({
  Filters: {
    screen: FilterPage,
    navigationOptions: {
      header: null
    }
  },
  Cards: {
    screen: SwipeCards,
    navigationOptions: {
      header: myNavOptions
    }
  },
  Favorites: {
    screen: FavoritesList
  }
});



const myNavOptions = {
  headerStyle: {
    backgroundColor: "#FFFFFF"
  },
  headerRight: (
    <Icon
      onPress={() => this.navigate('FilterPage')}
      name="user-circle"
      size={22}
      color="#b6b6b6"
      style={{ marginRight: 8 }}
    />
  ),
  headerLeft: (
    <Icon
      onPress={() => this.navigate("Favorites")}
      name="comments-o"
      size={22}
      color="#b6b6b6"
      style={{ marginLeft: 8 }}
    />
  ),
  title: "Coin Deck"
};



export default Routes;

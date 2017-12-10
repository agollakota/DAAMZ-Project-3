import { TabNavigator, StackNavigator} from 'react-navigation';
import React from 'react';
import { View } from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome';

import FilterPage from './FilterPage';
import SwipeCards from './SwipeCards';
import FavoritesList from './RestaurantList'


const Routes = TabNavigator({
  Filters: {
    screen: FilterPage,
    navigationOptions: {
      header: null
    }
  },
  Cards: {
    screen: SwipeCards,
    navigationOptions: {
      header: null
    }
  },
  Favorites: {
    screen: FavoritesList,
    navigationOptions: {
      header: null
    }
  }
});





export default Routes;

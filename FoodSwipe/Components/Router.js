import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import FilterPage from './FilterPage';
import FavoritesList from './RestaurantList';
import SwipeCards from './SwipeCards';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
<Scene
        <Scene key="filters" component={FilterPage} title="Select Your Filters" />

        <Scene key="swipeCards" component={SwipeCards} title="Food Swipe" />
        <Scene key="FavoritesList" component={FavoritesList} title="Favorites" />
    </Router> </>
  );
};

export default RouterComponent;

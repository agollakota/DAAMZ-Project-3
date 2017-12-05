import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import FilterPage from '../containers/FilterPage';
import FavoritesList from '../containers/FavoritesList';

const RouterComponent = () =>  {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
        <Scene key="filterPage" component={FilterPage} title="Select Filters" />
        <Scene key="favoritesList" component={FavoritesList} title="Select Your Favorite" />
    </Router>
  );
};

export default RouterComponent;

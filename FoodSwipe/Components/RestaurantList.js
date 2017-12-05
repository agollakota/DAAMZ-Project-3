import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import RestaurantDetail from './RestaurantDetail';

class RestaurantList extends Component {
  state = { restaurants: [] };

  componentWillMount() {
    axios.get('https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+Sydney&key=AIzaSyCQp15T05cCMaykrYdpa43QLDtdd1zDsGY')
      .then(response => this.setState({ restaurants: response.data }));
  }

  renderRestaurants() {
    return this.state.restaurants.map(restaurant =>
      <RestaurantDetail key={restaurant.name} restaurant={restaurant} />
    );
  }

  render() {
    console.log(this.state);

    return (
      <ScrollView>
        {this.renderRestaurants()}
      </ScrollView>
    );
  }
}

export default RestaurantList;

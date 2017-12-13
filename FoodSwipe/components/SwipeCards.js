// SwipeCards.js
'use strict';

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import SwipeCards from 'react-native-swipe-cards';
import NoMoreCards from './NoMoreCards'
import RestaurantCard from './RestaurantCard';
import Spinner from './common/Spinner'


//this handles the amount of cards in the deck
//handles te swipes for the app, which is taken from an external API

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    };
  }

	componentWillMount(){
		var cards = this.props.search.restaurants
		this.setState({ cards: cards })
	}

  handleYup (restaurant) {
		this.props.addFavorite(restaurant)
		// remove from array and send copy through dispatch
		this.props.removeCard(restaurant.name)
  }
  handleNope (restaurant) {
		// remove from array and send copy through dispatch
		this.props.removeCard(restaurant.name)
  }

	componentWillReceiveProps(nextProps){
		var cards = nextProps.search.restaurants
		this.setState({ cards: cards })
	}

  render() {
		if (this.props.search.loading) {
			return (<Spinner />);
		}
		else {
			return (
				<View style={styles.cards}>
		      <SwipeCards
		        cards={this.state.cards}
		        renderCard={(cardData) => <RestaurantCard {...cardData} />}
		        renderNoMoreCards={() => <NoMoreCards />}

						yupText={"YUM!"}
		        handleYup={this.handleYup.bind(this)}
		        handleNope={this.handleNope.bind(this)}
		      />
				</View>
	    )
		}

  }
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 25,
    marginRight: 25,

  },
  buttonText:{
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },

	cards: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	}
});

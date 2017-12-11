// SwipeCards.js
'use strict';

import React, { Component } from 'react';
import RouterButton from 'react-router-native-button';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';
import Stack from 'react-router-native-stack';
import SwipeCards from 'react-native-swipe-cards';
import NoMoreCards from './NoMoreCards'
import RestaurantCard from './RestaurantCard';
import RestaurantDetail from './RestaurantCard';
import Spinner from './common/Spinner'

var favoriteslist = [
    { name: '', rating: '' },
    { name: '', rating: '' },
    { name: '', rating: '' },
    { name: '', rating: '' },
    { name: '', rating: '' },
    { name: '', rating: '' },
    { name: '', rating: '' },
];
global.favorites = favoriteslist;

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    };
  }

  handleYup (card) {
		// TODO: Add to favorites
    console.log(`Yup for ${card.text}`)
    console.log('HEY ' , cardInfo.cardName);
    favoriteslist.push(cardInfo.cardName, cardInfo.cardRating);
  }
  handleNope (card) {
		// TODO: Remove from matches?
    console.log(`Nope for ${card.text}`)
  }

	componentWillReceiveProps(nextProps){
		var cards = nextProps.search.restraunts
		this.setState({ cards: cards })
	}

  render() {
		if (this.props.search.loading) {
			return (<Spinner />);
		}
		else {
			return (
				<View style={styles.cards}>

        <RouterButton
    to="/"
    title="Back"
    color="#581845"  />

		      <SwipeCards
		        cards={this.state.cards}
		        renderCard={(cardData) => <RestaurantCard {...cardData} />}
		        renderNoMoreCards={() => <NoMoreCards />}

						yupText={"YUM!"}
		        handleYup={this.handleYup}
		        handleNope={this.handleNope}
		      />
          <RouterButton
      to="/favorites"
      title="Done"
      color="#581845"
      accessibilityLabel="Click to navigate to settings"
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

// SwipeCards.js
'use strict';

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native'
import SwipeCards from 'react-native-swipe-cards';
import NoMoreCards from './NoMoreCards'
import RestaurantCard from './RestaurantCard';
import Spinner from './common/Spinner'

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
  }
  handleNope (card) {
		// TODO: Remove from matches?
    console.log(`Nope for ${card.text}`)
  }

	setCards(restraunts){

		console.log("Cards");

		// TODO: setState to cards
	}

	componentWillReceiveProps(nextProps){
		this.setState({ cards: nextProps.search.restraunts })
	}

  render() {
		if (this.props.search.loading) {
			console.log("loading");
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
		        handleYup={this.handleYup}
		        handleNope={this.handleNope}
		      />
				</View>
	    )
		}

  }
}

const styles = StyleSheet.create({
	cards: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	}
});
// SwipeCards.js
'use strict';

import React, { Component } from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import SwipeCards from 'react-native-swipe-cards';
import NoMoreCards from '../components/NoMoreCards'
// import RestaurantCard from '../components/RestrauntCard';

class Card extends Component {
  constructor(props) {
    super(props);
  }
	//TODO: Use restaurantProfile for card
  render() {
    return (
      <View style={[styles.card, {backgroundColor: this.props.backgroundColor}]}>
        <Text>{this.props.text}</Text>
      </View>
    )
  }
}

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {text: 'Tomato', backgroundColor: 'red'},
        {text: 'Courgette', backgroundColor: 'green'},
        {text: 'Blueberry', backgroundColor: 'blue'},
      ]
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

  render() {
    // If you want a stack of cards instead of one-per-one view, activate stack mode
    // stack={true}
    return (
      <SwipeCards
        cards={this.state.cards}
        renderCard={(cardData) => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}

				yupText={"YUM!"}
        handleYup={this.handleYup}
        handleNope={this.handleNope}

      />
    )
  }
}

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
		flex: 1,
		minWidth: 350,
		marginTop: 75,
		marginHorizontal: 25,
		marginBottom: 50,
  },
})

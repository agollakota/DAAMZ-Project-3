// SwipeCards.js
'use strict';

import React, { Component } from 'react';

import SwipeCards from 'react-native-swipe-cards';
import NoMoreCards from './NoMoreCards'
import RestaurantCard from './RestaurantCard';

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

    return (
      <SwipeCards
        cards={this.state.cards}
        renderCard={(cardData) => <RestaurantCard {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}

				yupText={"YUM!"}
        handleYup={this.handleYup}
        handleNope={this.handleNope}
      />
    )
  }
}

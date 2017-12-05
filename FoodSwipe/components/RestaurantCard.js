import React from 'react'
import {StyleSheet, Text, View} from 'react-native';

const RestaurantCard = (restaurant) => (
  <View style={[styles.card, {backgroundColor: restaurant.backgroundColor}]}>
    <Text>{restaurant.text}</Text>
  </View>
)

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

export default RestaurantCard;

import React from 'react'
import {StyleSheet, Text, View} from 'react-native';

const RestaurantCard = (restraunt) => (
  <View style={[styles.card, {backgroundColor: '#0000ff'}]}>
    <Text>{restraunt.name}</Text>
		<Text>{restraunt.rating}</Text>
  </View>
)

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
		flex: 1,
		minWidth: 350,
		marginTop: 25,
		marginHorizontal: 25,
		marginBottom: 50,
  },
})

export default RestaurantCard;

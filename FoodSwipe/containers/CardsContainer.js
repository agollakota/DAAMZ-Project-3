import React from 'react'
import SwipeCards from '../components/SwipeCards'
import { View, StyleSheet } from 'react-native';


const CardsContainer = () => (
	<View style={styles.cards}>
		<SwipeCards />
	</View>
);

const styles = StyleSheet.create({
	cards: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	}
});

export default CardsContainer;

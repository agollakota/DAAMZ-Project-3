import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image
} from 'react-native';
import Card from './common/Card';
import CardSection from './common/CardSection';
import {restaurants} from './actions/RestrauntActions';

const RestaurantDetail = ({ restaurant }) => {
  const { name, rating } = restaurant;
  const {

    headerContentStyle,

    headerTextStyle,
  } = styles;

  return (
    <Card>
      <CardSection>

        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{name}</Text>
          <Text>{rating}</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default RestaurantDetail;

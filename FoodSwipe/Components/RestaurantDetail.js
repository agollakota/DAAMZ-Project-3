import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image
} from 'react-native';
import Card from './common/Card';
import CardSection from './common/CardSection';



const RestaurantDetail = ({ rating, price,address, URL }) => {
  const { headerContentStyle,headerTextStyle, thumbnailStyle, thumbnailContainerStyle, imageStyle} = styles;
  return (
   </View>
        var rating = 3
        var price = 2
        var address = '1234 Place'
        var URL = 'https://blog.sqlauthority.com/i/a/errorstop.png'
      
      </CardSection>
     </Card>
    </View>
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

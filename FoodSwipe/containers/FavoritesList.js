import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
	} from 'react-native'
  import RouterButton from 'react-router-native-button';

export default class FavoritesList extends Component {


  render() {

      return (
        <View>

        <RouterButton
    to="/cards"
    title="Back"
    color="#581845"/>

        </View>
      )
    }


  }

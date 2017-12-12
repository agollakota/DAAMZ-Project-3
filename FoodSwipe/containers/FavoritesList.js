import React, {Component} from 'react';
import { List, ListItem } from 'react-native-elements'
  import RouterButton from 'react-router-native-button';
  import { FlatList, StyleSheet, Text, View } from 'react-native';
  import SwipeCards from '../components/SwipeCards'

list=favoriteslist
  export default class FlatListBasics extends Component {
    render() {
      return (
        <View style={styles.container}>
        <RouterButton
    to="/cards"
    title="Back"
    color="#841584"/>
    <List>
      {
        favoriteslist.map((item, i) => (
          <ListItem
            key={i}
            title={item.title}
            leftIcon={{name: item.icon}}
          />
        ))
      }
    </List>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  })

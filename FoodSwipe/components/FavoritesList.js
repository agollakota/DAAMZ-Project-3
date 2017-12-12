import React, {Component} from 'react';
import { List, ListItem } from 'react-native-elements'
  import RouterButton from 'react-router-native-button';
  import { FlatList, StyleSheet, Text, View } from 'react-native';
  import SwipeCards from '../components/SwipeCards'


  export default class FlatListBasics extends Component {

    render() {
console.log(favoriteslist[0].name);
      return (


        <View style={styles.container}>
        <RouterButton
    to="/cards"
    title="Back"
    color="#841584"/>

    <List containerStyle={{marginBottom: 20}}>
    {
      favoriteslist.map((l, i) => (
        <ListItem
          subtitle={l.rating}
          key={i}
          title={l.name}
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

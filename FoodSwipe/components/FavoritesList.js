import React, {Component} from 'react';
import { List, ListItem, Button, Icon } from 'react-native-elements'
  import RouterButton from 'react-router-native-button';
  import { FlatList, StyleSheet, Text, View } from 'react-native';
  import Communications from 'react-native-communications';




  export default class FlatListBasics extends Component {

    render() {
      return (


        <View style={styles.container}>


    <List containerStyle={{marginBottom: 20}}>
    {
      favoriteslist.map((l, i) => (
        <ListItem
          subtitle={l.rating}
          key={i}
          title={l.name}
          leftIcon={
            <Icon
        raised
        name='phone'
        type='font-awesome'
        color='#f50'
        onPress={() =>Communications.phonecall('0123456789', true)} />}
          //onPress={Communications.phonecall('0123456789', true)}
          rightIcon={
            <Icon
raised
name='map'
type='font-awesome'
color='#f50'
onPress={() =>Communications.web('https://www.google.com/maps/place/'+l.address,true)} />


          }
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
      fontSize: 20,
      height: 44,
    },
  })

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';

export default class ProfilePage extends Component {
  render() {
    return(
      <View style={styles.container}>
        < Header />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor = '#000',
  }
});

AppRegistry.registerCompnent('ProfilePage', () => ProfilePage);

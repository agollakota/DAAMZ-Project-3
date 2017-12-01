import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MapView from 'react-native-maps';

export default class App extends React.Component {

var lat =  42.00;
var longitude = -87.66;

 render()   {
      return (
      <View style={styles.container}>

         <MapView style={styles.map}
              region={{
                  latitude: lat,
                  longitude: longitude,
                  latitudeDelta: 0.1,
                  logitudeDelta: 0.1

                 }}

         >

            <MapView.Marker
                 coordinate={{
                   latitude: lat,
                   longitude: long
                   }}
                 title={'You are here'}
                 />
          </MapView>
        </View>
    );
  }

}


cons styles = StyleSheet.create({

     container:{
         position: 'absolute',
         top: 0,
         left: 0,
         bottom: 0,
         right: 0,
         justifyContent: 'flex-end',
         alignItems: 'center'
      },

     map: {
         position: 'absolute',
         top: 0,
         left: 0,
         bottom: 0,
         right: 0
     }
});


      

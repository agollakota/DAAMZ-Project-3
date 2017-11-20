import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MapView from 'react-native-maps';

export default class App extends React.Component {


 render()   {
      return (
      <View style={styles.container}>

         <MapView style={styles.map}
              region={{
                  latitude: 42.00,
                  longitude: -87.66,
                  latitudeDelta: 0.1,
                  logitudeDelta: 0.1

                 }}

         >

            <MapView.Marker
                 coordinate={{
                   latitude: 42.00,
                   longitude: -87.66
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


      

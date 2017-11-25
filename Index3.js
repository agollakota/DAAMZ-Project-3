import React, {Component} from "react";

import { AppRegistry, StyleSheet, Text, View, Dimensions} from "react-native";

import MapView, {PROVIDER_GOOGLE} from "react-native-maps";


const{width, height} = Dimensions.get('window')

export default class Index extends Component {

constructor(){

super()

this.state = {

region: {

latitude: null,

longitude: null,

latitudeDelta: null,

longitudeDelta: null

}

}

}


calcDelta(lat, lon, accuracy){

const latDelta = accuracy * (1/ (Math.cos(lat)*111)) 

const lonDelta = (accuracy / 111) 

this.setState({

region: {

latitude: lat,

longitude: lon,

latitudeDelta: latDelta,

longitudeDelta: lonDelta

}

})

}

componentWillMount(){

navigator.geolocation.getCurrentPosition(

(position) => {

const lat = position.coords.latitude

const lon = position.coords.longitude

const accuracy = position.coords.accuracy

this.calcDelta(lat, lon, accuracy)

}

)

}

marker(){

return{

latitude: this.state.region.latitude,

longitude: this.state.region.longitude

}

}
Marker1(){

return{

latitude: this.state.region.latitude,

longitude: this.state.region.longitude

}

}

render() {

return(

<View style={style.container}>

{this.state.region.latitude ? <MapView

style={styles.map} 

initialRegion= {this.state.region}

>

<MapView.Marker

coordinate={this.marker()}

title = "Location"

description = "Home"

/>

<MapView.Marker1

coordinate={this.marker1()}

title = "Location"

description = "Restaurant"

/>

/MapView>: null }

<MapView.Marker1

coordinate={{

latitude: 42.00,

longitude: -87.66

}}

title={‘Restaurant is here'}

/>

</MapView>

</View>

);

}

}

const styles = StyleSheet.create({

container: {

flex:1,

justifyContent: 'center',

alignItems: 'center',

backgroundColor: '#cccccc',

},

map: {

flex: 1,

width: width

}

});


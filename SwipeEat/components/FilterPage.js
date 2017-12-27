import React, { Component } from 'react';
import { Link } from 'react-router-native'
import {
    StyleSheet,
    Text,
    View,
		Picker,
		Slider,
		TouchableOpacity
} from 'react-native'
import CheckBox from 'react-native-check-box'
// TODO: Swith to React-Native-Elements component
import Filters from '../constants/Filters.json'
import styles from '../constants/styles'
// TODO: Add location services

//this is the first user interaction package
//this uses external libraries to handle the user input on the CheckBox
//it also uses the search button to handle and send to the api request
export default class FilterPage extends Component {
  constructor() {
    super();

		this.state = {
			foodOptions : Filters.foodOptions,
			selectedFoodIndex : 0,
			dietOptions : Filters.dietOptions,
			selectedDiet : [],
			distance : Filters.distance,
			price : Filters.price,
			latitude : null,
			longitude : null,
			error : null,
		}
  }

	componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }

	renderPicker(){ //rendering the picker
		let items = this.state.foodOptions.map((type, index) => {
			return  <Picker.Item label={type} value={index} key={index} />;
		})

		return(
			<Picker
         mode="dropdown"
         selectedValue={this.state.selectedFoodIndex}
         onValueChange={(itemValue, itemIndex) => this.setState({selectedFoodIndex: itemValue})}>
					 {items}
      </Picker>
		)}

  renderCheckBox() { //rendering the checkbox
    let boxes = this.state.dietOptions.map((filter, index) => {
			return <CheckBox
					style={{flex: 1, padding: 10}}
					onClick={()=>this.onClickCheckBox(filter)}
					isChecked={filter.checked}
					leftText={filter.name}
					key={index}
			/>
		})
		return boxes;
  }

  onClickCheckBox(data) {
		let selected = this.state.selectedDiet;
    data.checked = !data.checked;
		if (data.checked && !selected.includes(data.name)) {
			selected.push(data.name);
		}
		else if (!data.checked) {
			const index = selected.indexOf(data.name);
	    selected.splice(index, 1);
		}
		this.setState({selectedDiet : selected});
  }

	renderDistanceSlider(){
		return (
			<Slider
         step={100}
         minimumValue={500}
         maximumValue={5000}
         value={this.state.distance}
         onValueChange={val => this.setState({ distance: val })}
        />);
	}

	renderPriceOptions(){
		return (
			<Slider
				 step={1}
				 minimumValue={1}
				 maximumValue={5}
				 value={this.state.price}
				 onValueChange={val => this.setState({ price: (val) })}
				/>);
	}

	renderView() {

			views = (
				<View style={styles.filters}>
					<Text style={styles.headers}>{"Type of Food:"}</Text>
						{this.renderPicker()}
					<Text style={styles.headers}>{"Diet Restrictions:"}</Text>
						{this.renderCheckBox()}
					<Text style={styles.headers}>{"Distance: " + this.state.distance + "M"}</Text>
						{this.renderDistanceSlider()}
					<Text style={styles.headers}>{"Max Price: "+ (this.state.price)}</Text>
						{this.renderPriceOptions()}
				</View>
			)
      return views;
  }

	renderButton(){
    // TODO: Turn into search button component
		return(
			<View style={styles.buttonContainer}>
				<Link to="/cards"
					component={TouchableOpacity}
					style={styles.button}
					onPress={this.onPressButton}>
						<Text style={styles.buttonText}>Search</Text>
				</Link>
			</View>
		)
	}

	onPressButton = () => {
		//Build query for search
		// 1. Build basic type var
		var query = 'type=restaurant&query='
		// 2. Add other categories
			// A. food type
		const food = this.state.foodOptions[this.state.selectedFoodIndex];
			// B. diet
		var foodDetails = food
		this.state.dietOptions.map((filter, index) => {
			if (filter.checked) {foodDetails += ('+' +  filter.name)}
		})
		query += foodDetails
			// C. price
		var price = this.state.price - 1
		price = price < 1 ? price + 1: price;
		query += '&maxprice=' + price.toString();

		// D. location and radius
		const location = '&location=' + this.state.latitude + "," + this.state.longitude;
		const radius = '&radius=' + this.state.distance;
		query += location + radius
			// '&location=' + location + '&radius=' + 10000
		this.props.searchForMatches(query);
	}

  render() {
      return (
          <View style={styles.filtersContainer}>
            {this.renderView()}
						{this.renderButton()}
          </View>
      )
  }
}

import React, {Component} from 'react';
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
import Filters from '../constants/Filters.json'

export default class FilterPage extends Component {
    constructor() {
      super();

			this.state = {
				foodOptions : Filters.foodOptions,
				selectedFoodIndex : 0,
				dietOptions : Filters.dietOptions,
				selectedDiet : [],
				distance : Filters.distance,
				price : Filters.price
			}
    }

		renderPicker(){
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

    renderCheckBox() {
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
      // let msg=data.checked? 'you checked ':'you unchecked '
      // console.log(msg+data.name);
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
      // TODO: Break into search button component
			return(
				<View style={styles.containerButton}>
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
			query += foodDetails + "in+chicago" //"in+chicago" will be replaced by location data
				// C. price
			var price = this.state.price - 1
			price = price < 1 ? price + 1: price;
			query += '&maxprice=' + price.toString();
			// TODO:
				// D. location and radius
				// const location =42.3675294,-71.186966
				// const radius = this.state.distance;
				// '&location=' + location + '&radius=' + 10000
			// store.dispatch(fetchRestraunts(query))
		}

    render() {
        return (
            <View style={styles.container}>
              {this.renderView()}
							{this.renderButton()}
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop:15,
    },
		filters: {
			flex: 3,
			paddingLeft: 30,
			paddingRight: 30,
			marginBottom:15
		},
		headers: {
			fontSize: 20,
			fontWeight: 'bold'
		},
		containerButton: {
	    borderBottomWidth: 1,
	    padding: 5,
	    backgroundColor: '#fff',
	    justifyContent: 'flex-start',
	    flexDirection: 'row',
	    borderColor: '#ddd',
	    position: 'relative'
	  },
		button: {
			flex: 1,
	    alignSelf: 'stretch',
	    backgroundColor: '#fff',
	    borderRadius: 5,
	    borderWidth: 1,
	    borderColor: '#007aff',
	    marginLeft: 25,
	    marginRight: 25,
			marginBottom: 25,
		},
		buttonText:{
			alignSelf: 'center',
	    color: '#007aff',
	    fontSize: 16,
	    fontWeight: '600',
	    paddingTop: 10,
	    paddingBottom: 10
		}
})

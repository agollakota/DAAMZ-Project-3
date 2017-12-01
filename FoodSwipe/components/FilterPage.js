import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
		Picker,
		Slider,
		TouchableOpacity
} from 'react-native'
import CheckBox from 'react-native-check-box'


export default class example extends Component {
    constructor() {
      super();
			this.state = {
				foodOptions : [	"Chinese",
												"Pizza",
												"Fast Food"],
				selectedFoodIndex : 0,
				dietOptions : [	{name : "Vegetarian", checked:false},
												{name : "Vegan", checked:false},
												{name : "Gluten Free", checked:false}],
				selectedDiet : [],
				distance : 1600, // Meters; So default close to a mile
				price : 5
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
						<Text style={styles.headers}>{"Price: "+ (this.state.price)}</Text>
							{this.renderPriceOptions()}

					</View>
				)
        return views;

    }

		onPressButton = () => {
			const food = this.state.foodOptions[this.state.selectedFoodIndex];
			// var diet = ' '
			// this.state.dietOptions.map((filter, index) => {
			// 	if (filter.checked) {
			// 		diet.concat(filter.name)
			// 		console.log(filter.name);
			// 	}
			// })
			// console.log("Diet: " + diet);
			const price = this.state.price;
			const distance = this.state.distance;

			var request = {
				query : food,
				minPriceLevel : 0,
				maxPriceLevel : price,
				type : 'restaurant',
				// location : userLocation,
				radius : distance
			}
			console.log(request);
		}

    render() {
        return (
            <View style={styles.container}>
              {this.renderView()}
							<TouchableOpacity style={styles.button} onPress={this.onPressButton}>
					      <Text style={styles.buttonText}>Search</Text>
					    </TouchableOpacity>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f2f2',
        marginTop:30
    },
		filters: {
			flex: 4,
			padding: 25
		},
		headers: {
			fontSize: 20,
			fontWeight: 'bold'
		},
		button: {
			backgroundColor: '#3fffff',
			flex: 1,
			margin: 50,
			padding: 20
		},
		buttonText:{
			fontSize: 50,
			textAlign: 'center'
		}
})

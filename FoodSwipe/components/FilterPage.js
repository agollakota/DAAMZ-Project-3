import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
		Picker
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
				price : { min : 0, max : 4}
			}
    }

		renderPicker(){
			let items = this.state.foodOptions.map((type, index) => {
				return  <Picker.Item label={type} value={index} />;
			})

			const options = this.state.foodOptions;

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

		}

		renderPriceOptions(){

		}

		renderView() {

				views = (
					<View>
						<Text>{"Type of Food:"}</Text>
							{this.renderPicker()}
						<Text>{"Diet Restrictions:"}</Text>
							{this.renderCheckBox()}
						<Text>{"Distance:"}</Text>
							{}
						<Text>{"Price:"}</Text>
							{}
					</View>
				)
        return views;

    }

    render() {
        return (
            <View style={styles.container}>
              {this.renderView()}
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f2f2',
        marginTop:30
    }
})

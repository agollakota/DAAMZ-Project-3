import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { Header } from 'react-native-elements'
import RouterButton from 'react-router-native-button';
import { withRouter } from 'react-router'

class HeaderComp extends React.Component {

	renderHeaders(){
		const history = this.props.history
		const page = history.location.pathname //location props
    //the navigation buttons are conditionally rendered based on current page
		switch (page) {
			case '/cards':
				return CardsHeader
			case '/favorites':
				return FavoritesHeader
			case '/':
				if (history.index > 0) {
					return SearchHeader;
				}
			default:
				return(
					<Header
				    statusBarProps={{ barStyle: 'light-content' }}
				    centerComponent={{ text: 'Food Swipe', style: { fontWeight: 'bold', color: '#fff', fontSize: 30 } }}
				    outerContainerStyles={{ backgroundColor: '#C70039' }}
				    innerContainerStyles={{ justifyContent: 'space-around',} }
			    />
				)
		}
	}

	render(){
	  return (
		<View>
			{ this.renderHeaders() }
		</View>
	)}
}

const CardsHeader = (
	<Header
	statusBarProps={{ barStyle: 'light-content' }}
	leftComponent = { <RouterButton to="/" title="Search"
	color="#581845" accessibilityLabel="Click to navigate to settings"
	/>}
	centerComponent={{ text: 'Food Swipe',
	style:{ fontWeight: 'bold', color: '#fff', fontSize: 30 } }}
	outerContainerStyles={{ backgroundColor: '#C70039' }}
	innerContainerStyles={{ justifyContent: 'space-around' } }

	rightComponent = { <RouterButton
	to="/favorites"
	title="Favorites"
	color="#581845"
	accessibilityLabel="Click to navigate to settings"
	/>}
	/>
)

const FavoritesHeader = (
	<Header
	statusBarProps={{ barStyle: 'light-content' }}
	leftComponent = { <RouterButton to="/cards" title="Cards"
	color="#581845" accessibilityLabel="Click to navigate to settings"
	/>}
	centerComponent={{ text: 'Food Swipe',
	style:{ fontWeight: 'bold', color: '#fff', fontSize: 30 } }}
	outerContainerStyles={{ backgroundColor: '#C70039' }}
	innerContainerStyles={{ justifyContent: 'space-around' } }
	/>
)

const SearchHeader = (
	<Header
	statusBarProps={{ barStyle: 'light-content' }}
	leftComponent = { <RouterButton to="/cards" title="Cards"
	color="#581845" accessibilityLabel="Click to navigate to settings"
	/>}
	centerComponent={{ text: 'Food Swipe',
	style:{ fontWeight: 'bold', color: '#fff', fontSize: 30 } }}
	outerContainerStyles={{ backgroundColor: '#C70039' }}
	innerContainerStyles={{ justifyContent: 'space-around' } }
	rightComponent = { <RouterButton
	to="/favorites"
	title="Favorites"
	color="#581845"
	accessibilityLabel="Click to navigate to settings"
	/>}
	/>
)

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F3',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    paddingTop: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 30
  }
};

// Connect the component with the Router
export default HeaderComp = withRouter(HeaderComp);

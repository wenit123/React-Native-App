'use strict';
 
var React = require('react-native');

/**
* This is a destructuring assignment, 
* which lets you extract multiple object properties and 
* assign them to variables using a single statement. 
* As a result, the rest of your code can drop the React prefix; 
*/

var {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicatorIOS,
  Image,
  Component
} = React;

var styles = StyleSheet.create({
  	
  	container: {
    	padding: 30,
    	marginTop: 65,
    	alignItems: 'center'
  	},
  	description: {
    	marginBottom: 20,
    	fontSize: 18,
    	textAlign: 'center',
    	color: '#656565'
  	},
	flowRight: {
		flexDirection: 'row',
	  	alignItems: 'center',
  		alignSelf: 'stretch'
	},
	searchInput: {
		fontSize: 18,
		height: 36,
		padding: 4,
		marginRight: 5,
		flex: 4,
		borderWidth: 1,
		borderRadius: 8,		
		borderColor: '#48BBEC',

	},
	button: {
		height: 36,
		backgroundColor: '#48BBEC',
		borderColor: '#48BBEC',
  		borderWidth: 1,
  		borderRadius: 8,
  		marginBottom: 10,
  		alignSelf: 'stretch',
  		justifyContent: 'center',
  		flex: 1,
		flexDirection: 'row',
	},
	buttonText: { 
		fontSize: 18,
  		color: 'white',
 	 	alignSelf: 'center' 		
	}


});

// NOTE: TouchableHighlight supports only one child
// If you wish to have several child components, wrap them in a View.

class SearchPage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			searchString: 'Las Vegas'
		};
	}

// This takes the value from the native browser event’s text property and 
// uses it to update the component’s state.
	onSearchTextChange(event) {
		console.log('onSearchTextChange');
		this.setState ({searchString: event.nativeEvent.text});
		console.log(this.state.searchString);
	}

	render(){
		console.log('SearchPage.render');
		return(
			<View style={styles.container}>
				<Text style={styles.description}>
				Search for your house!!
				</Text>
				<Text style={styles.container}>
				Search Now!!!!
				</Text>
				<View style={styles.flowRight}>
  				<TextInput
  					style={styles.searchInput} 
  					value={this.state.searchString} 
  					onChange={this.onSearchTextChange.bind(this)}
  					placeholder='Search via name or postcode'/>
  						<TouchableHighlight style={styles.button} underlayColor='#99d9f4'>
    					<Text style={styles.buttonText}>Go</Text>
  						</TouchableHighlight>
				</View>

				<TouchableHighlight style={styles.button} underlayColor='#99d9f4'>
  				<Text style={styles.buttonText}>Location</Text>
				</TouchableHighlight>

				<Image source={require('./house.png')} />
			</View>
		);
	}
}


//This exports the SearchPage class 
//which permits its use in other files.

module.exports = SearchPage;
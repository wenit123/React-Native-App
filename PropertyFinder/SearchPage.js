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
  	description: {
    	marginBottom: 20,
    	fontSize: 18,
    	textAlign: 'center',
    	color: '#656565'
  	},
	container: {
		padding: 30,
		marginTop: 65,
		alignItems: 'center'
	}
});




class SearchPage extends Component {
	render(){
		return(
			<View style={styles.container}>
				<Text style={styles.description}>
				Search for your house!!
				</Text>
				<Text style={styles.description}>
				Search by different way!
				</Text>
			</View>
		);
	}
}


//This exports the SearchPage class 
//which permits its use in other files.

module.exports = SearchPage;
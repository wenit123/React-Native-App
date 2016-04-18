/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */


/**
* which adds improved error handling and disables some less-than-ideal JavaScript language features. 
* In simple terms, it makes JavaScript better!
*/

'use strict';

//This loads the react-native module and assigns it to React.
var React = require('react-native');


//The React Native StyleSheet class used to style the application UI 
//is similar to the CSS used on the Web
var styles = React.StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  }
});

class PropertyFinderApp extends React.Component {
  render() {
    // return React.createElement(React.Text, {style: styles.text}, "Hello World!");
    return <React.Text style={styles.text}>Hello World (Again)</React.Text>;

  }
}


// import React, {
//   AppRegistry,
//   Component,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';

// class PropertyFinder extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.ios.js
//         </Text>
//         <Text style={styles.instructions}>
//           Press Cmd+R to reload,{'\n'}
//           Cmd+D or shake for dev menu
//         </Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

// AppRegistry.registerComponent('PropertyFinder', () => PropertyFinder);


React.AppRegistry.registerComponent('PropertyFinder', function() { return PropertyFinderApp });
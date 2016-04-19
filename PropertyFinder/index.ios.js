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
var SearchPage = require('./SearchPage');

//The React Native StyleSheet class used to style the application UI 
//is similar to the CSS used on the Web
var styles = React.StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1   
  }
});

class PropertyFinderApp extends React.Component {
  render() {
    return (
      <React.NavigatorIOS
        style = {styles.container}
        initialRoute = {{
          title: 'Property Finder',
          component: SearchPage
        }}/>
    );
  }
}

React.AppRegistry.registerComponent('PropertyFinder', function() { return PropertyFinderApp });
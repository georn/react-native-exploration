import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Main extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          To-Do Master
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})


// module.exports = React.createClass({
//   render() {
//     return (
//       <View>
//         <Text>
//           To-Do Master
//         </Text>
//       </View>
//     )
//   }
// })
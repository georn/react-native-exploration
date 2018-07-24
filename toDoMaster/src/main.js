import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

// export default class Main extends React.Component {
//   getInitialState() {
//     return ({
//       tasks: ['Take out the trash', 'Get groceries', 'Practice piano']
//     })
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>
//           To-Do Master
//         </Text>
//         <Text>
//           {/* {this.state.tasks} */}
//         </Text>
//       </View>
//     )
//   }
// }

export default React.createClass({
  getInitialState() {
    return ({
      tasks: ['Take out the trash', 'Get groceries', 'Practice piano']
    })
  },

  render() {
    return (
      <View style={styles.container}>
        <Text>
          To-Do Master
        </Text>
      </View>
    )
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
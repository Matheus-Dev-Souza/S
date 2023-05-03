import React, { Component, Fragment } from 'react';
import {
  StyleSheet, 
  View, 
  Button,
  Image,
} from 'react-native';
import Constants from './Constants';
import ReelSet from './components/ReelSet';

export default class App extends Component {
    constructor(props) {
      super(props);
      this.reelSet = null;
}

render() {
    return (
        <View style={styles.container}>
            <View style={styles.playContainer}>
                 <ReelSet ref={(ref) => {this.reelSet = ref; }}/>    
            </View>
            <View style={styles.buttonContainer}>
                  <Button title='Spin' onPress={() => {this.reelSet.spin() }} />
            </View>
        </View>

      );
    }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    height: 60,
    width: Constants.MAX_WIDTH,
    backgroundColor: "purple",
  },
  playContainer: {
    height: Constants.MAX_HEIGHT - 60,
    width: Constants.MAX_WIDTH,
    backgroundColor: "blue",
  }
});
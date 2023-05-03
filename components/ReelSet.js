import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Constants from '../Constants';
import Reel from './Reel';

export default class ReelSet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: null,
      height: null,
    }

    this.reels = [];
  }

  randomBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  spin = () => {
    for (let i = 0; i < Constants.REELS; i++) {
      this.reels[i].scrollByOffset(this.randomBetween(
        (Constants.REELS_REPEAT - 6) * this.reels[i].symbols.length,
        (Constants.REELS_REPEAT - 5) * this.reels[i].symbols.length,
      ));
    }
  }

  onLayout = (e) => {
    this.setState({
      width: e.nativeEvent.layout.width,
      height: e.nativeEvent.layout.height,
    })
  }

  renderReels = () => {
    let reelWidth = this.state.width / Constants.REEL;
    let reelList = Array.apply(null, Array(Constants.REEL)).map((el, idx) => {
      return <Reel width={reelWidth} height={this.state.height} key={idx} ref={(ref) => {this.reels[idx] = ref }} />;
    });

    return (
      <>
        {reelList}
      </>
    )
  }

  render() {
    return (
      <View style={styles.reelSet} onLayout={this.onLayout}>
        {this.state.width && this.state.height && this.renderReels()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  reelSet: {
    flex: 1,
    backgroundColor: 'orange',
    flexDirection: 'row',
  },
});
import React from 'react';
import { View, Image } from 'react-native';
import images from './images';

const SlotMachine = () => {
  return (
    <View>
      <Image source={images.cherry} />
      <Image source={images.bell} />
      <Image source={images.seven} />
    </View>
  );
};

export default SlotMachine;

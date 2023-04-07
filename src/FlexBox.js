import {View, Text} from 'react-native';
import React from 'react';

// flexDirection
// justify-content
// align-items

const FlexBox = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'space-around',
      }}>
      <View style={{width: 100, height: 100, backgroundColor: 'green'}}></View>
      <View style={{width: 100, height: 100, backgroundColor: 'orange'}}></View>
      <View style={{width: 100, height: 100, backgroundColor: 'red'}}></View>
    </View>
  );
};

export default FlexBox;

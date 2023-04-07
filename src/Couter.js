import {View, Text, TouchableOpacity} from 'react-native';
import React, {useReducer, useState} from 'react';
import {action} from 'mobx';
//import { action } from 'mobx';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREASE': {
      return state + 1;
    }
    case 'DECREASE': {
      return state - 1;
    }
    default: {
      return state;
    }
  }
};
const Couter = () => {
  // const [counter, setCounter] = useState(0);

  // reducer fucntion , initial state => state,dispatch

  const [counter, dispatch] = useReducer(reducer, 0);
 
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 20}}>{counter}</Text>
      <TouchableOpacity
        style={{
          marginTop: 20,
          borderWidth: 1,
          justifyContent: 'center',
          alignItems: 'center',
          width: 200,
          height: 50,
        }}
        onPress={() => {
          dispatch({type: 'INCREASE'});
        }}>
        <Text>Increase</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginTop: 20,
          borderWidth: 1,
          justifyContent: 'center',
          alignItems: 'center',
          width: 200,
          height: 50,
        }}
        onPress={() => {
          dispatch({type: 'DECREASE'});
        }}>
        <Text>Decrease</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Couter;

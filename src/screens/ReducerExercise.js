import React, {useReducer} from 'react';
import {View, Text, Button} from 'react-native';

const reducer = (state, action) => {
  //state === {count:number}
  //action === {type: 'increament' || 'decreament',payload:1}
  switch (action.type) {
    case 'increment':
      return {...state, count: state.count + action.payload};
    //   return {...state, count: state.count + 1};
    case 'decrement':
      return {...state, count: state.count - action.payload};
    //   return {...state, count: state.count - 1};
    default:
      return state;
  }
};

const ReducerExercise = navigation => {
  const [state, dispatch] = useReducer(reducer, {count: 0});
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => dispatch({type: 'increment', payload: 1})}
      />

      <Button
        title="Decrease"
        onPress={() => dispatch({type: 'decrement', payload: 1})}
      />

      <Text>Current count= {state.count}</Text>
    </View>
  );
};

export default ReducerExercise;

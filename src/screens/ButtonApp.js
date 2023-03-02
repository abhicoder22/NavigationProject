import React from 'react';
import {Text, View, Button, TouchableOpacity} from 'react-native';

const ButtonApp = ({navigation}) => {
  return (
    <View>
      <Text>Hello bro!</Text>
      <Button title="Click" onPress={() => navigation.push('ListWithTwoObj')} />
      <TouchableOpacity onPress={() => console.log('List pressed')}>
        <Text>Go to List</Text>
        <Text>Go to List</Text>
        <Text>Go to List</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonApp;

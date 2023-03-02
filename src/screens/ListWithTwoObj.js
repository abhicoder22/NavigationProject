import React from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';

const ListWithTwoObj = ({navigation}) => {
  const friends = [
    {name: 'Friend1', age: 20},
    {name: 'Friend2', age: 21},
    {name: 'Friend3', age: 22},
    {name: 'Friend4', age: 23},
    {name: 'Friend5', age: 24},
    {name: 'Friend6', age: 25},
    {name: 'Friend7', age: 26},
  ];        
  return (
    <FlatList
      keyExtractor={friends => friends.name}
      data={friends}
      renderItem={({item}) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age{item.age}
          </Text>
        );
      }}></FlatList>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 15,
  },
  fontSize: {
    fontSize: 15,
  },
});

export default ListWithTwoObj;

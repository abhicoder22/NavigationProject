import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListApp = ({navigation}) => {
  const friends = [
    {name: 'Abhishek #1'},
    {name: 'Anand #2'},
    {name: 'Anand #3'},
    {name: 'Anand #4'},
    {name: 'Anand #5'},
    {name: 'Anand #6'},
    {name: 'Anand #7'},
    {name: 'Anand #8'},
    {name: 'Anand #9'},
    {name: 'Anand #10'},
    {name: 'Anand #11'},
    {name: 'Anand #12'},
    {name: 'Anand #13'},
  ];
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={friends => friends.name}
      data={friends}
      renderItem={({item}) => {
        return <Text style={styles.textStyle}>{item.name}</Text>;
      }}></FlatList>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginHorizontal: 10,
  },
});

export default ListApp;

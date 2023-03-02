import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Example = ({navigation}) => {
  return <Text style={styles.textStyle}>hello! brother</Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 35,
  },
});

export default Example;

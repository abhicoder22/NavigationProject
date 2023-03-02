import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Boxscreen = navigation => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Layout</Text>
      <Text style={styles.textTwoStyle}>Layout</Text>
      <Text style={styles.textThreeStyle}>Layout</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 1,
    borderColor: 'red',
    marginHorizontal: 10,
    marginTop: 10,
    // flexDirection: 'row',
    alignItems: 'center',
    height: 150,
  },
  textOneStyle: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    // flex: 4,
    alignSelf: 'flex-end',
  },
  textTwoStyle: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    // flex: 4,
    alignSelf: 'flex-start',
  },
  textThreeStyle: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
  },
});

export default Boxscreen;

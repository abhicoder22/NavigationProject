import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const LayoutSystem = navigation => {
  return (
    <View style={styles.patentStyle}>
      <Text style={styles.textStyle}>App</Text>
      <View style={styles.viewOneStyle}></View>
      <View style={styles.viewParentStyle}>
        <View style={styles.viewTwoStyle}></View>
      </View>
      <View style={styles.viewThreeStyle}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  patentStyle: {
    borderColor: 'black',
    borderWidth: 1,
    height: 200,
    alignItems: 'center',
    marginHorizontal: 5,
    marginTop: 5,
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewOneStyle: {
    borderColor: 'black',
    borderWidth: 1,
    height: 50,
    width: 50,
    backgroundColor: 'red',
  },
  viewTwoStyle: {
    borderColor: 'black',
    borderWidth: 1,
    height: 50,
    width: 50,
    backgroundColor: 'green',
  },
  viewParentStyle: {
    height: 100,
    justifyContent: 'flex-end',
  },
  viewThreeStyle: {
    borderColor: 'black',
    borderWidth: 1,
    height: 50,
    width: 50,
    backgroundColor: 'purple',
  },
  textStyle: {
    fontSize: 35,
    color: 'black',
  },
});

export default LayoutSystem;

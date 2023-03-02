import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = ({navigation}) => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        imageScore={9}
        imageToShow={require('../../assets/forest.jpg')}
      />       
      <ImageDetail    
        title="Beach"
        imageScore={10}
        imageToShow={require('../../assets/beach.jpg')}
      />
      <ImageDetail
        title="Mountain"
        imageScore={11}
        imageToShow={require('../../assets/mountain.jpg')}
      />
    </View>
  );
};
  
const styles = StyleSheet.create({});

export default ImageScreen;

import React, {useState} from 'react';
import {View, Button, FlatList} from 'react-native';

const ColorScreen = ({navigation}) => {
  const [colors, setColors] = useState([]);
  return (
    <View>
      <Button
        title="Add color"
        onPress={() => {
          setColors([...colors, randomColor()]);
        }}
      />

      <FlatList
        keyExtractor={item => item}
        data={colors}
        renderItem={({item}) => {
          return (
            <View style={{height: 100, width: 100, backgroundColor: item}} />
          );
        }}
      />
    </View>
  );
};

const randomColor = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

export default ColorScreen;

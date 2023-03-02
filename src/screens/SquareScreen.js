import React, {useState} from 'react';
import {View, Button, StyleSheet, Text} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const SquareScreen = ({navigation}) => {
  const [red, setRed] = useState(0);
  const [blue, setBlue] = useState(0); 
  const [green, setGreen] = useState(0); 
  
  const setColor = (color, change) => {
    switch (color) {
      case 'red':
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;     
          
      case 'blue':
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return;
           
      case 'green':
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        return;
    }     
    
    // if (color === 'red') {
    //   if (red + change > 255 || red + change < 0) {
    //     return;
    //   } else {
    //     setRed(red + change);
    //   }
    // }
  };

  return (
    <View>
      <ColorCounter
        onIncrease={() => setColor('red', COLOR_INCREMENT)}
        onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
        // onIncrease={() => setRed(red + COLOR_INCREMENT)}
        // onDecrease={() => setRed(red - COLOR_INCREMENT)}
        color="Red"
      />
        
      <ColorCounter
        color="Green"
        onIncrease={() => setColor('blue', COLOR_INCREMENT)}
        onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)}
        // onIncrease={() => setBlue(blue + COLOR_INCREMENT)}
        // onDecrease={() => setBlue(blue - COLOR_INCREMENT)}
      />

      <ColorCounter
        onIncrease={() => setColor('green', COLOR_INCREMENT)}
        onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)}
        color="Blue"
      />
          
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${blue},${green})`,
        }}
      />   
    </View>
  );
};

export default SquareScreen;

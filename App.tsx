import React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ButtonApp from './src/screens/ButtonApp';
import ListWithTwoObj from './src/screens/ListWithTwoObj';
import ImageScreen from './src/screens/PropsScreen';
import CounterScreen from './src/screens/StateScreen';
import ColorScreen from './src/screens/StateWithList';
import SquareScreen from './src/screens/SquareScreen';
import ReducerSquareScreen from './src/screens/ReducerSquareScreen';
import CommunityConvention from './src/screens/CommunityConvention';
import ReducerExercise from './src/screens/ReducerExercise';
import TextScreen from './src/screens/TextScreen';
import Boxscreen from './src/screens/Boxscreen';
import LayoutSystem from './src/screens/Layoutsystems';

function HomeScreen({navigation}: {navigation: any}) {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Details"
        onPress={() => navigation.navigate('ButtonApp')}
      />

      <Button
        title="PropsScreen"
        onPress={() => navigation.navigate('ImageScreen')}
      />

      <Button
        title="StateScreen"
        onPress={() => navigation.navigate('CounterScreen')}
      />

      <Button
        title="StateWithListScreen"
        onPress={() => navigation.navigate('ColorScreen')}
      />

      <Button
        title="SquareScreen"
        onPress={() => navigation.navigate('SquareScreen')}
      />
      <Button title="Reducer" onPress={() => navigation.navigate('Reducer')} />

      <Button
        title="CommuntyConventon"
        onPress={() => navigation.navigate('CommunityConvention')}
      />

      <Button
        title="ReducerExercise"
        onPress={() => navigation.navigate('ReducerExercise')}
      />

      <Button
        title="TextScreen"
        onPress={() => navigation.navigate('TextScreen')}
      />

      <Button
        title="Boxscreen"
        onPress={() => navigation.navigate('Boxscreen')}
      />

      <Button
        title="LayoutSystem"
        onPress={() => navigation.navigate('Layoutsytem')}
      />
    </View>
  );
}
function DetailsScreen({navigation}: {navigation: any}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button
        title="Go to details"
        onPress={() => navigation.push('ButtonApp')}
      />
    </View>
  );
}

function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ButtonApp" component={ButtonApp} />
        <Stack.Screen name="ListWithTwoObj" component={ListWithTwoObj} />
        <Stack.Screen name="ImageScreen" component={ImageScreen} />
        <Stack.Screen name="CounterScreen" component={CounterScreen} />
        <Stack.Screen name="ColorScreen" component={ColorScreen} />
        <Stack.Screen name="SquareScreen" component={SquareScreen} />
        <Stack.Screen name="Reducer" component={ReducerSquareScreen} />
        <Stack.Screen
          name="CommunityConvention"
          component={CommunityConvention}
        />
        <Stack.Screen name="ReducerExercise" component={ReducerExercise} />
        <Stack.Screen name="TextScreen" component={TextScreen} />
        <Stack.Screen name="Boxscreen" component={Boxscreen} />
        <Stack.Screen name="Layoutsytem" component={LayoutSystem} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable comma-dangle */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React from 'react';
import Home from './screens/Home';
import Details from './screens/Details';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Navbar from './components/Navbar';
import Search from './screens/Search';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTransparent: true,
            header: ({navigation}) => <Navbar navigation={navigation} main={true}/>,
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            headerTransparent: true,
            header: ({navigation}) => <Navbar navigation={navigation} />,
          }}
        />
         <Stack.Screen
          name="Search"
          component={Search}
          options={{
            headerTransparent: true,
            header: ({navigation}) => <Navbar navigation={navigation} />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

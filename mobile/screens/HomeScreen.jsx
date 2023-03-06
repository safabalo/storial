import React from 'react';
// import{View, Text} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Favorite from './Favorite';

const Tab = createBottomTabNavigator();
function HomeScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favorite" component={Favorite} />
    </Tab.Navigator>
  );
}


export default HomeScreen;
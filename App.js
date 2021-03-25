import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

import {Home} from './src/screens/Home';
import {Corona} from './src/screens/Conona';

const App = () => {

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Corona" component={Corona} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;

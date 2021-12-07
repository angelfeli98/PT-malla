import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Icon from 'react-native-vector-icons/AntDesign';

import React from 'react';
import ChatsScreen from '../Screens/ChatsScreen';
import GruposScreen from '../Screens/GruposScreen';
import Mapa from '../Screens/Mapa';
import RedScreen from '../Screens/RedScreen';

const Tab = createBottomTabNavigator();

const TabBotton = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Red" component={RedScreen} />
      <Tab.Screen name="Grupos" component={GruposScreen} />
      <Tab.Screen name="Chats" component={ChatsScreen} />
      <Tab.Screen name="Mapa" component={Mapa} />
    </Tab.Navigator>
  );
};

export default TabBotton;

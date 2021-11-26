import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TelaPrincipal from './workspace/projeto-pam-react/TelaPrincipal.jsx';
import TelaSobre from './workspace/projeto-pam-react/TelaSobre.jsx';
import TelaDetalhes from './workspace/projeto-pam-react/TelaDetalhes.jsx';

const Tab = createBottomTabNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#FFFFFF" />
      <Tab.Navigator
      tabBarOptions={
        {
          labelStyle: { fontSize: 24 },
          style: {backgroundColor: '#00ced1'},
          activeTintColor: '#FFFFFF'
        }
      }
      >
        <Tab.Screen name="TelaPrincipal" component={TelaPrincipal} />
        <Tab.Screen name="TelaSobre" component={TelaSobre} />
        <Tab.Screen name="TelaDetalhes" component={TelaDetalhes} />
      </Tab.Navigator>
    </NavigationContainer>

  );
}
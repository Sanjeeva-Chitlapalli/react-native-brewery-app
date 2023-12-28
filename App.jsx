import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, StyleSheet, FlatList } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import CardComponent from './src/Components/CardComponent';
import { request } from './utils/request';
import store from './src/redux/store';
import { Provider } from 'react-redux';
import SlidingBanner from './src/Components/SlidingBanner';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/Screens/Home';
import Profile from './src/Screens/Profile';
import Socializing from './src/Screens/Socializing';
import Cart from './src/Screens/Cart';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Categories from './src/Screens/Categories';


function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}


function App() {

  const backgroundStyle = {
    backgroundColor: Colors.lighter,
  };
  const Tab = createMaterialBottomTabNavigator();


  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
        initialRouteName="Home"
        activeColor="#ffff"
        barStyle={{ backgroundColor: 'tomato' }}
        >
          <Tab.Screen name="Home" component={Home} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}/>
        <Tab.Screen name="Categories" component={Categories} options={{
        tabBarLabel: 'Categories',
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="category" color={color} size={26} />
        ),
      }}/>
          <Tab.Screen name="Community" component={Socializing} options={{
          tabBarLabel: 'Community',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="google-circles-communities" color={color} size={26} />
          ),
        }}/>
          <Tab.Screen name="Profile" component={Profile} options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" color={color} size={26} />
          ),
        }}/>
          
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>

  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
});

export default App;

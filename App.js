import 'react-native-gesture-handler';
import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faMapMarker, faBell, faStore, faUser } from '@fortawesome/free-solid-svg-icons';

import HomeScreen from './screens/HomeScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import LocationScreen from './screens/LocationScreen';
import AlertsScreen from './screens/AlertsScreen';
import StoreScreen from './screens/StoreScreen';
import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const LocationStack = createStackNavigator();
const AlertsStack = createStackNavigator();
const StoreStack = createStackNavigator();
const ProfileStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <HomeStack.Screen name="Notifications" component={NotificationsScreen} options={{ headerShown: false }} />
    </HomeStack.Navigator>
  );
}

function LocationStackScreen() {
  return (
    <LocationStack.Navigator>
      <LocationStack.Screen name="Location" component={LocationScreen} options={{ headerShown: false }} />
    </LocationStack.Navigator>
  );
}

function AlertsStackScreen() {
  return (
    <AlertsStack.Navigator>
      <AlertsStack.Screen name="Alerts" component={AlertsScreen} options={{ headerShown: false }} />
    </AlertsStack.Navigator>
  );
}

function StoreStackScreen() {
  return (
    <StoreStack.Navigator>
      <StoreStack.Screen name="Store" component={StoreScreen} options={{ headerShown: false }} />
    </StoreStack.Navigator>
  );
}

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
    </ProfileStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            if (route.name === 'Home') {
              return (<FontAwesomeIcon icon={faHome} size={25} color={color} />);
            } else if (route.name === 'Location') {
              return <FontAwesomeIcon icon={faMapMarker} size={25} color={color} />;
            } else if (route.name === 'Alerts') {
              return (<FontAwesomeIcon icon={faBell} size={25} color={color} />);
            } else if (route.name === 'Store') {
              return <FontAwesomeIcon icon={faStore} size={25} color={color} />;
            } else if (route.name === 'Profile') {
              return <FontAwesomeIcon icon={faUser} size={25} color={color} />;
            }
          },
          tabBarLabel: ({ focused, color }) => {
            let label;
            switch (route.name) {
              case 'Home':
                return label = focused ? <Text style={{ color }}>Home</Text> : null
              case 'Location':
                return label = focused ? <Text style={{ color }}>Location</Text> : null
              case 'Alerts':
                return label = focused ? <Text style={{ color }}>Alerts</Text> : null
              case 'Store':
                return label = focused ? <Text style={{ color }}>Store</Text> : null
              case 'Profile':
                return label = focused ? <Text style={{ color }}>Profile</Text> : null
            }
            return label
          }
        })}
        tabBarOptions={{ activeTintColor: 'blue', inactiveTintColor: 'gray' }}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Location" component={LocationStackScreen} />
        <Tab.Screen name="Alerts" component={AlertsStackScreen} />
        <Tab.Screen name="Store" component={StoreStackScreen} />
        <Tab.Screen name="Profile" component={ProfileStackScreen} />
      </Tab.Navigator>
    </NavigationContainer >
  );
}
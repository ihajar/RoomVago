import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

// Screens
import HomeScreen from '../screens/HomeScreen/HomeScreen'
import SavedScreen from '../screens/SavedScreen/SavedScreen'
import BookingScreen from '../screens/BookingScreen/BokkingScreen'
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen'
import SearchScreen from '../screens/SearchScreen/SearchScreen'
import PlacesScreen from '../screens/PlacesScreen/PlacesScreen'

// Icons
import { AntDesign, Foundation, Ionicons } from '@expo/vector-icons';

const StackNavigator = () => {
    const Tab = createBottomTabNavigator();
    const Stack = createNativeStackNavigator();

    function BottomTabs() {
        return (
            <Tab.Navigator screenOptions={{tabBarStyle: {paddingTop: 15, paddingBottom: 15, height: 75, borderTopStartRadius: 30,
                                            borderTopEndRadius: 30} }} >
                <Tab.Screen 
                    name='Home' component={HomeScreen} 
                    options={{tabBarLabel: 'Home', headerShown: false, tabBarIcon: ({focused}) => focused ? (
                        <Foundation name="home" size={30} color="#095086" />
                    ) : (
                        <AntDesign name="home" size={30} color="#095086" />
                    )}} 
                />
                 <Tab.Screen 
                    name='Saved' component={SavedScreen} 
                    options={{tabBarLabel: 'Saved', headerShown: false, tabBarIcon: ({focused}) => focused ? (
                        <AntDesign name="heart" size={30} color="#095086" />
                    ) : (
                        <AntDesign name="hearto" size={30} color="#095086" />
                    )}} 
                />
                 <Tab.Screen 
                    name='Bookings' component={BookingScreen} 
                    options={{tabBarLabel: 'Bookings', headerShown: false, tabBarIcon: ({focused}) => focused ? (
                        <Ionicons name="notifications-sharp" size={30} color="#095086" />
                    ) : (
                        <Ionicons name="notifications-outline" size={30} color="#095086" />
                    )}} 
                />
                 <Tab.Screen 
                    name='Profile' component={ProfileScreen} 
                    options={{tabBarLabel: 'Profile', headerShown: false, tabBarIcon: ({focused}) => focused ? (
                        <Ionicons name="person" size={30} color="#095086" />
                    ) : (
                        <Ionicons name="person-outline" size={30} color="#095086" />
                    )}} 
                />
             
            </Tab.Navigator>
        )
    }
  return (
    <NavigationContainer>
        <Stack.Navigator >
            <Stack.Screen name='Main' component={BottomTabs} options={{headerShown: false}} />
            <Stack.Screen name='Search' component={SearchScreen} options={{headerShown: true}}/>
            <Stack.Screen name='Places' component={PlacesScreen} options={{headerShown: true}} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})
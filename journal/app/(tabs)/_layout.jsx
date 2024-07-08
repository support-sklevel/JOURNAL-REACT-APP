import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Colors } from './../../constants/Colors';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown:false,
                          tabBarActiveTintColor:Colors.PRIMARY
                           }}>
                 
       <Tabs.Screen name='journal' options={{
                                         tabBarLabel:'Journal',
                                         tabBarIcon:({color})=><FontAwesome6 name="book-atlas" size={24} color={color} />                          
                                        }}/>      
      <Tabs.Screen  name='home'  options={{
                                         tabBarLabel:'Home',
                                         tabBarIcon:({color})=><FontAwesome5 name="home" size={38} color="#EB9694" />                               
                                        }}/>                                             
      <Tabs.Screen name='profile' options={{
                                         tabBarLabel:'profile',
                                         tabBarIcon:({color})=><Octicons name="people" size={24} color={color} />                                        
                                        }}/>
    </Tabs>
  )
}
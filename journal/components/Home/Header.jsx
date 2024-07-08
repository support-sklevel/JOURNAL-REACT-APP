import { View, Text , Image, TextInput } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo';
import { useFonts } from "expo-font";
import { FontAwesome5 } from '@expo/vector-icons';

export default function Header() {
   
  const {user}=useUser();
 

  return (
    <View style={{
                 padding:20,
                 paddingTop: 45,
                 backgroundColor: '#EB9694',
                 borderBottomRightRadius: 20,
                 borderBottomLeftRadius: 20,
                 
                 }}>
    <View style={{
                 display:'flex',
                 flexDirection:'row', 
                 alignItems: 'center',
                 gap: 10
                   }}>
        <Image source={{uri:user?.imageUrl}}
                style={{
                  width:45,
                  height:45,
                  borderRadius:99    
        }}/> 
        <View>
          <Text style={{
                         fontSize:15,
                         color: '#fff',
                         fontFamily:'outfit-Bold'
          }}>Welcome,</Text>
          <Text style={{
                         fontSize:12,
                         color: '#fff',
                         fontFamily:'outfit-Bold'

                      }}>{user?.fullName}</Text>
        </View>
      </View>
        {/* Search bar*/}
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        gap:10,
        
        alignItems:'center',
        backgroundColor: '#fff',
        padding: 5,
        marginVertical: 10,
        marginTop: 25,
       marginBottom: 15,
        borderRadius: 8
      }}>
      <FontAwesome5 name="search" size={18} color="#EB9694" />
       <TextInput placeholder='Search....'
          style={{
                fontFamily: 'outfit'
          }}
       />     
      </View>
    </View>
  )
}
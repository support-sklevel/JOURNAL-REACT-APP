import { View, Text, Image , StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useFonts } from "expo-font";
import * as WebBrowser from "expo-web-browser";
import {useWarmUpBrowser} from "./../hooks/useWarmUpBrowser"
import { useOAuth } from '@clerk/clerk-expo';
import { ClerkProvider, ClerkLoaded, SignIn, SignOut } from "@clerk/clerk-expo"
import * as Linking from "expo-linking"
import { useRouter } from 'expo-router';


WebBrowser.maybeCompleteAuthSession();
export default function LoginScreen() {
  useWarmUpBrowser();
  const  router=useRouter();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp,  setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);



  return (
    <View>
    <View style={{
               display: 'flex',
               alignItems: 'center',
               marginTop: 40

    }}>
     <Image source={require('./../assets/images/journal-app4_ultimate.jpg')} 
                style={{
                   width:250,
                   height:580,
                   borderRadius:40,
                   borderWidth:8,
                   borderColor: '#DBDF00' }}  /> 
                   
    </View > 
       <View style={styles.subContainer}>
              <Text style={{ 
                            color:'#000000', 
                            fontSize:25 ,
                            fontFamily: 'outfit-Bold',
                            textAlign: 'center'
                            
                          }}>
                Welcome! Your Ultimate 
                <Text style={{ color:'#DBDF00', fontSize: 35}}> MindVault Personal Journal
                  </Text> App </Text> 
              <Text style={{ textAlign: 'center', fontFamily:'outfit-Medium', marginVertical: 5, margin:5, color: '#ABB8C3'}}>
               your personal space for reflection and growth. Capture your thoughts, track your progress, and explore the depths of your mind.
              </Text>

         
              <TouchableOpacity style={styles.btn}
              onPress={onPress}
              >
                <Text style={{
                          textAlign: "center",
                          color: '#fff',
                          fontFamily: 'outfit-Bold'
                }}> Let's   Get   Started</Text>
              </TouchableOpacity>
       </View>               
    </View>

  )
}
const styles = StyleSheet.create({
  subContainer:{
    backgroundColor:'#fff', padding: 10, 
    fontFamily: 'outfit-Bold'
  },
  btn:{
    backgroundColor: '#EB9694',
    padding:16,
    borderRadius:99,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 15,
    
  }
})
import { useFonts } from "expo-font";
import { View, Text } from 'react-native'
import { Stack } from "expo-router";
import { ClerkProvider,  SignedIn, SignedOut } from "@clerk/clerk-expo"
import LoginScreen from './../components/LoginScreen';


export default function RootLayout() {
  useFonts({
    'outfit':require('./../assets/fonts/Outfit-Regular.ttf'),
    'outfit-Medium':require('./../assets/fonts/Outfit-Medium.ttf'),
    'outfit-Bold':require('./../assets/fonts/Outfit-Bold.ttf')

  })
  return (
   <ClerkProvider publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <SignedIn>
             <Stack screenOptions={{headerShown:false}}>
                 <Stack.Screen name="(tabs)"  />
                 
             </Stack>
      </SignedIn>
      <SignedOut>
            <LoginScreen/>
      </SignedOut>
   </ClerkProvider>
  );
}

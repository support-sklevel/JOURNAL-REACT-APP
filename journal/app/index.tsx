import { Redirect } from "expo-router";
import { Text, View } from "react-native";
import LoginScreen from './../components/LoginScreen';

export default function Index() {
  return <Redirect href={`/home`}/>
}

import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screms/Login';
import Registro from '../screms/Registro';


const Stack = createNativeStackNavigator();
const AuthNav = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="registro" component={Registro} /> 
    </Stack.Navigator>
  )
}

export default AuthNav
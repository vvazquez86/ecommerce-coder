import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screms/Home'
import Productos from '../screms/Productos'
import ProductDetail from '../screms/ProductDetail'
import Header from '../components/Header'

const Stack = createNativeStackNavigator()

const RootNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='home' screenOptions={{headerShown: false}}>
        <Stack.Screen component={Home} name='home' />
        <Stack.Screen component={Productos} name='productos' />
        <Stack.Screen component={ProductDetail} name='productDetail' />
    </Stack.Navigator>
  )
}

export default RootNavigation
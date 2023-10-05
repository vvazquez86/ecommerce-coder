import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import RootNavigation from './RootNavigation';
import Perfil from '../screms/Perfil';
import { colors } from '../themes/colors';

//Iconos de la TabNav
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const TabNav = () => {
    return (
        <Tab.Navigator screenOptions={{ title: "", headerShown: false }}>
            <Tab.Screen
                options={{
                    tabBarIcon: ({focused}) => <Entypo name="shop" 
                    size={focused ? 32 : 25} 
                    color={focused ? colors.dorado : colors.marronFuerte} />
                }}
                name="rootNavigation"
                component={RootNavigation} />
            <Tab.Screen
                options={{
                    tabBarIcon: ({focused}) => <FontAwesome name="user" 
                    size={focused ? 32 : 25} 
                    color={focused ? colors.dorado : colors.marronFuerte} />
                }}
                name="perfil" 
                component={Perfil} />
        </Tab.Navigator>
    )
}

export default TabNav

const styles = StyleSheet.create({

})
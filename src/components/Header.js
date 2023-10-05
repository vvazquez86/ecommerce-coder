 import { View, Text, StyleSheet, Pressable, } from 'react-native'
 import React from 'react'
 import { colors } from '../themes/colors'
 import { textFont } from '../themes/textFont'

 
 const Header = ({ title, navigation }) => {
   return (
     <View style={styles.container}>
      <Pressable onPress={() => navigation.goBack()}>
        <Text>Ir atras</Text>
      </Pressable>
       <Text style={styles.title}> { title } </Text>
     </View>
   )
 }

 const styles = StyleSheet.create({
    container: {
        height: textFont.h1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.marronFuerte
    },

    title: {
        fontSize: 25,
        marginVertical: 20,
        fontWeight: "600",
        color: colors.marronSuave,
        marginTop: 50,    
    }
 })
 
 export default Header
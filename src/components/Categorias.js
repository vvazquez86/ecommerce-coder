import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'

import { colors } from '../themes/colors'
import CategoriasItem from './CategoriasItem'

const Categorias = () => {
  return (
    <View style={styles.container}>
      
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.marronSuave,        
        margin: 10,
        borderColor: colors.marronFuerte,
        borderWidth: 2,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
    },

    text: {
        fontSize: 20,
        marginVertical: 2,
        fontWeight: "300",
        color: colors.marronFuerte,
    }
 })

export default Categorias
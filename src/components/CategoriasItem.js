import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../themes/colors'
import { setCategory } from '../redux/slice/homeSlice'
import { useDispatch } from 'react-redux'


const CategoriasItem = ( {item, navigation }) => {
  const dispatch = useDispatch();

  const onHandleItem = () => {
    dispatch(setCategory(item));
    navigation.navigate('productos', { item: item})
  }
  
  return (
    <Pressable style={styles.container} onPress={()=> onHandleItem()}>
      <Text style={styles.text}>{item}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    
    container: {
        margin: 5
    },

    text: {
        
        marginVertical: 2,        
        backgroundColor: colors.marronMedio,

        //Estilo de bordes
        borderRadius: 10,
        borderColor: colors.marronFuerte,
        borderWidth: 1,
        
        //Estilo de texto
        fontSize: 18,
        textAlign: "center",
        padding: 10,
        fontWeight: "300",
        color: colors.marronFuerte,
    }
 })

export default CategoriasItem
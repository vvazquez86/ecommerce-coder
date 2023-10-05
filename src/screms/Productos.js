import { View, Text, FlatList, SafeAreaView, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import Buscador from '../components/Buscador'
import Header from '../components/Header'
import ProductosItem from '../components/ProductosItem'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useGetProductosQuery } from '../servicios/ecApi'
import { ActivityIndicator } from 'react-native'
import { colors } from '../themes/colors'


const Productos = ({ route, navigation }) => {

    const [categoriaProd, setCateogoriaProd] = useState([]);
    const [text, setText] = useState(null);
    const { item } = route.params;
    const { data, isLoading, isError } = useGetProductosQuery();
    const productos = data;


    const productsFilterByCategory = useSelector(
        (state) => state.homeSlice.productsFilterByCategory
    );


    //Forma de ver un JSON ordenado en la consola...
    //console.log("Productos desde el store", JSON.stringify(productos, null, " "))



    useEffect(() => {

        setCateogoriaProd(productsFilterByCategory)

        if (text) {
            const nombreProducto = productos.filter((el) => el.title === text);
            setCateogoriaProd(nombreProducto);
        }
    }, [text, item])


    return (
        <SafeAreaView style ={styles.container}>
            {isLoading ? (
                <ActivityIndicator style={styles.spinner} size="large" color={colors.marronFuerte} />
            ) : (
                <View>
                    <Header title={item} />
                    <Pressable onPress={() => navigation.goBack()}>
                        <Text>Ir Atras</Text>
                    </Pressable>
                    <Buscador text={text} setText={setText} />
                    <FlatList
                        data={categoriaProd}
                        keyExtractor={productos.id}
                        renderItem={({ item }) => <ProductosItem navigation={navigation} item={item} />}
                    />
                </View>
            )}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.grisTono,
        flex: 1,
      },

      spinner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }
})

export default Productos
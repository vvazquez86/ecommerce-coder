import { View, Text, Image, StyleSheet, Button, Pressable, SafeAreaView } from 'react-native'
import React from 'react'
import { productos } from '../data/productos'
import Header from '../components/Header'
import { colors } from '../themes/colors'
import { AntDesign } from '@expo/vector-icons';
import { useSelector } from 'react-redux'




const ProductDetail = ({ navigation }) => {

    const productSelected = useSelector(
        (state) => state.homeSlice.productSelected
    );

    return (
        <SafeAreaView>
            <Header title="Detalle" />
            <Pressable onPress={()=> navigation.goBack()}>
                <Text>Ir Atras</Text>
            </Pressable>
            <View style={styles.container}>
                <Image
                    style={styles.imagenes}
                    source={{
                        uri: productSelected.images[1]
                    }}
                />
            </View>
            <View style={styles.containerDetalle}>
                <Text style={styles.titulo}>{productSelected.title}</Text>
                <Text>{productSelected.description}</Text>
                <Text style={styles.precio}>Precio: ${productSelected.price}</Text>
            </View>
            
            <Pressable style={styles.boton} onPress={()=> console.log('Funciona')}>
                <Text style={styles.textoBoton}>Comprar</Text>
            </Pressable>

            <View style={styles.rating}>
                <AntDesign style={styles.ratingItems} name="star" size={15} color="black" />
                <Text style={styles.ratingItems}>Rating: {productSelected.rating}</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    imagenes: {
        height: 350,
        width: 350,
    },
    container: {
        marginTop: 10,
        alignItems: 'center'
    },
    containerDetalle: {
        alignItems: 'baseline',
        marginTop: 20,
        marginHorizontal: 10,
    },
    titulo: {
        fontSize: 35,
        fontWeight: "600",
    },
    precio: {
        fontSize: 20,
        fontWeight: "400",
        marginTop: 15,
        marginBottom: 20,
    },
    boton: {
        marginVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: colors.marronSuave,
        borderRadius: 10,
    },
    textoBoton:{
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        latterSpacing: 0.25,
        color: colors.marronFuerte,
    },
    rating: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 20,
        marginTop: 20,
    },
    ratingItems: {
        marginHorizontal: 5,
        fontSize: 22,
        fontWeight: "300",
    }
})

export default ProductDetail
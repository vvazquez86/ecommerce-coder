import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import React from 'react';
import { colors } from '../themes/colors';
import { useWindowDimensions } from 'react-native';
import { setProductSelected } from '../redux/slice/homeSlice';
import { useDispatch } from 'react-redux';

const ProductosItem = ({ item, navigation }) => {

    const { height, width } = useWindowDimensions();
    const dispatch = useDispatch();
    const onHandleProductDetail = () => {
        dispatch(setProductSelected(item));
        navigation.navigate("productDetail");
    }
    return (
        <View style={styles.container}>            
            <Pressable onPress={() =>  onHandleProductDetail()}>
                <Text style={styles.texto}>{item.title}</Text>
            </Pressable>

            <Image style={styles.imagen} height={60} width={60} source={{ uri: item.images[0] }} resizeMode='cover' />
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: colors.grisTono,
        marginHorizontal: 20,
        marginVertical: 10,
        borderColor: colors.marronFuerte,
        borderRadius: 10,
        borderWidth: 2,
        height: 80,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },

    texto: {
        fontSize: 20,
        fontWeight: "400",
        marginLeft: 20,
    },

    imagen: {
        marginRight: 10,
        borderColor: colors.marronFuerte,
        borderWidth: 2,
    }
})

export default ProductosItem
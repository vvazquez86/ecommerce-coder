import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { colors } from '../themes/colors'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Perfil = () => {



    return (
        <View>
            <Header title='Mi Perfil' />
            <View style={styles.container}>
                <Image
                    style={styles.imagen}
                    source={{
                        uri: "https://img.freepik.com/vector-premium/icono-circulo-usuario-anonimo-ilustracion-vector-estilo-plano-sombra_520826-1931.jpg"
                    }}
                />
                <Pressable onPress={() => console.log('Abrir Camara')} style={styles.containerIconos}>
                    <Entypo name="camera" size={24} color="black" />
                    <Text>Abrir Camara</Text>
                </Pressable>

                <Pressable onPress={() => console.log('Abrir Galeria')} style={styles.containerIconos}>
                    <FontAwesome name="photo" size={24} color="black" />
                    <Text>Abrir Galeria</Text>
                </Pressable>

                <Pressable onPress={() => console.log('Abrir Ubicacion')} style={styles.containerIconos}>
                    <FontAwesome name="map-marker" size={24} color="black" />
                    <Text>Abrir Ubicación</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Perfil

const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
        marginTop: 20,
    },

    containerIconos:{
        marginVertical: 10,
        alignItems: 'center',
    },

    imagen: {
        width: 200,
        height: 200,
        borderRadius: 100,
        borderColor: colors.marronMedio,
        borderWidth: 2,
    }
})
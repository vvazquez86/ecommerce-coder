import {
    Pressable,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native'
import React from 'react'
import { colors } from '../themes/colors'
import { useState } from 'react'
import { firebase_auth } from "../firebase/firebe_auth"
import { createUserWithEmailAndPassword } from 'firebase/auth'



const Registro = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        console.log('boton registro')

        try {
            const response = await createUserWithEmailAndPassword(
                firebase_auth,
                email,
                password
            );
            
            console.log(response)
            
            navigation.navigate('login');
        }
        catch (e) {
            console.log('Error encontrado', e)
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registro</Text>
            <TextInput
                placeholder='Email'
                style={styles.input}
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                placeholder='Contraseña'
                secureTextEntry
                style={styles.input}
                value={password}
                onChangeText={(text) => setPassword(text)}
            />

            <TouchableOpacity style={styles.button} onPress={() => handleRegister()}>
                <Text style={styles.buttonText}>Registrate</Text>
            </TouchableOpacity>
            <Pressable onPress={()=> navigation.navigate('login')}>
                <Text style={styles.registroText}>Ya tienes cuenta? Iniciar Secion</Text>
            </Pressable>
        </View>
    )
}

export default Registro

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        fontWeight: '600',
    },
    input: {
        width: '85%',
        height: 50,
        borderColor: colors.marronFuerte,
        borderWidth: 2,
        borderRadius: 5,
        marginBottom: 20,
        paddingHorizontal: 10,
        fontSize: 17,
    },
    button: {
        backgroundColor: colors.marronFuerte,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: colors.grisTono,
        fontSize: 20,
        fontWeight: '600',
    },
    registroText: {
        marginTop: 30,
        fontSize: 18,
        color: colors.azulLink,
    }
})
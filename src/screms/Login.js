import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Pressable,
    TouchableOpacity,
} from 'react-native'
import React from 'react'
import { colors } from '../themes/colors'
import { useState } from 'react'
import { firebase_auth } from '../firebase/firebe_auth'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { setIdToken, setUsuario } from '../redux/slice/authSlice'

const Login = ({ navigation }) => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try{
            const response = await signInWithEmailAndPassword(firebase_auth, email, password);

            dispatch(setUsuario(response.user.email));
            dispatch(setIdToken(response._tokenResponse.idToken))

            console.log(response)
        }
        catch (e){
            console.log('Error encontrado: ', e)
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Inicio de Seción</Text>
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
            {/* Investigar */}
            <TouchableOpacity style={styles.button} onPress={()=> handleLogin()}>
                <Text style={styles.buttonText}>Iniciar Seción</Text>
            </TouchableOpacity>
            <Pressable onPress={()=>navigation.navigate('registro')}>
                <Text style={styles.registroText}>No tienes cuenta? Registrate</Text>
            </Pressable>
        </View>
    )
}

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

export default Login


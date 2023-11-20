import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function EmBreve({ route }) {

    const [boasVindas, setBoasVindas] = useState('Bem vindo(a), ')
    const [apelido, setApelido] = useState('Visitante');
    const [email, setEmail] = useState('Nenhum Email Cadastro');
    const navigation = useNavigation()

    const loadInfo = async () => {
        try {
            const apelidoG = await AsyncStorage.getItem('apelido');
            const emailG = await AsyncStorage.getItem('email');
            if (apelidoG) {
                setBoasVindas('Bem vindo de volta, ')
                setApelido(apelidoG);
            }
            if (emailG) {
                setEmail(emailG);
            }
        } catch (error) {
            console.error('Erro ao carregar apelido:', error);
        }
    }

    const limpar = async () => {
        setApelido('Visitante')
        setEmail('Nenhum Email Cadastro')
        setBoasVindas('Bem vindo(a), ')
        AsyncStorage.clear()
    }

    useEffect(() => {
        loadInfo();
    }, []);

    const cadastro = () => {
        navigation.navigate('Cadastro');
    }
    const segundaRota = () => {
        navigation.navigate('Apelido');
    }
    return (
        <>
            <SafeAreaView style={styles.background}>
                <View style={styles.container}>

                    <Text style={styles.texto}>{boasVindas}<Text style={styles.textoE}>{apelido}</Text>!</Text>
                    <Text style={styles.texto}>Email: <Text style={styles.textoE}>{email}</Text>!</Text>

                    <TouchableOpacity onPress={limpar}>
                        <Text style={styles.textoClear}>Limpar info</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.rotaBotao} onPress={cadastro}>
                        <Text style={styles.textoL}>Cadastro (Clone)</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.rotaBotao} onPress={segundaRota}>
                        <Text style={styles.textoL}>Segunda Rota</Text>
                    </TouchableOpacity>

                </View>
            </SafeAreaView>
        </>
    )
}


const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    rotaBotao: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#141519',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#f67828',
        width: '50%'
    },
    texto: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 20
    },
    textoClear: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 20,
        textDecorationLine: 'underline',
        textDecorationColor: '#f67828',
    },
    textoL: {
        color: '#fff',
        fontSize: 16,
        textDecorationColor: '#f67828',
        textAlign: 'center'
    },
    textoE: {
        color: '#f67828',
        fontSize: 16,
        marginBottom: 20
    }
})
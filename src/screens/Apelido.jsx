import { View, Text, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Apelido({ route }) {

    const navigation = useNavigation()
    const [isConfirmarFocused, setIsConfirmarFocused] = useState(false);
    const [apelido, setApelido] = useState('');

    const email = route.params?.email || 'Nenhum Email Cadastro';

    const handleConfirmarFocus = () => {
        setIsConfirmarFocused(true);
    };

    const handleBlur = () => {
        setIsConfirmarFocused(false);
    };

    useEffect(() => {
        loadApelido();
    }, []);

    const handleApelido = async () => {
        if (apelido && email) {
            try {
                // Salva o apelido e o e-mail no AsyncStorage
                await AsyncStorage.setItem('apelido', apelido);
                await AsyncStorage.setItem('email', email);

                Alert.alert('Bom ter você conosco, ' + apelido);
                navigation.navigate('EmBreve', { apelido, email });
            } catch (error) {
                console.error('Erro ao salvar apelido e e-mail:', error);
            }
        } else {
            Alert.alert('Preencha o campo de apelido e insira um e-mail válido!');
        }
    };


    const loadApelido = async () => {
        try {
            const savedApelido = await AsyncStorage.getItem('apelido');
            if (savedApelido) {
                setApelido(savedApelido);
            }
        } catch (error) {
            console.error('Erro ao carregar apelido:', error);
        }
    };

    return (
        <SafeAreaView style={styles.background}>

            <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={200} style={styles.container}>

                <View>
                    <Text style={styles.textoEspecial}>Seja Bem-Vindo (a)!</Text>
                    <Text style={styles.texto}>Por favor digite a baixo como gostaria de ser chamado(a) pela comunidade:</Text>
                </View>

                <TextInput
                    style={[styles.input,
                    {
                        borderBottomColor: isConfirmarFocused ? '#f67828' : '#5a5b5d',
                        backgroundColor: isConfirmarFocused ? '#24252a' : '#141519',
                    },]}
                    placeholder='Apelido'
                    placeholderTextColor='#dedfe0'
                    autoCorret={false}
                    onFocus={handleConfirmarFocus}
                    onBlur={handleBlur}
                    value={apelido}
                    onChangeText={(text) => setApelido(text)}
                />

                <TouchableOpacity style={[
                    styles.btnConfirmar,
                    {
                        backgroundColor: (apelido !== '') ? '#f67828' : '#000',
                        borderColor: (apelido !== '') ? '#f67828' : '#5a5b5d',
                    },
                    styles.textoCriarConta,
                    {
                        color: (apelido !== '') ? "#000" : '#5a5a5a',
                    }
                ]}
                    onPress={handleApelido}
                >
                    <Text style={styles.textoBtnConfirmar}>Confirmar</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </SafeAreaView >
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
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: 20,
    },
    input: {
        width: '100%',
        paddingTop: 20,
        paddingBottom: 6,
        paddingHorizontal: 15,
        backgroundColor: '#141519',
        color: '#fff',
        borderBottomColor: '#5a5b5d',
        borderBottomWidth: 3,
        fontSize: 16
    },
    texto: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 40,
        textAlign: 'center'
    },
    textoEspecial: {
        fontSize: 24,
        color: '#fff',
        textAlign: 'center',
        marginBottom: 15,
        // color: '#f67828'
    },
    btnConfirmar: {
        backgroundColor: '#000',
        borderWidth: 2,
        borderColor: '#5a5a5a',
        width: '100%',
        height: 35,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textoBtnConfirmar: {
        fontSize: 16,
        fontWeight: 'light',
        color: '#5a5a5a'
    },
})
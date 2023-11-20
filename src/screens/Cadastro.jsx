import { View, Image, StyleSheet, TextInput, TouchableOpacity, Text, Alert, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { styles } from './StyleCadastro'

export default function Cadastro() {

    const navigation = useNavigation()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isChecked, setChecked] = useState(false);
    const [isEmailFocused, setIsEmailFocused] = useState(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);
    const [emailEhValido, setEmailEhValido] = useState(true);
    const [passwordEhValido, setPasswordEhValido] = useState(true);

    const toggleCheckbox = () => {
        setChecked(!isChecked);
    };

    const handleEmailFocus = () => {
        setIsEmailFocused(true);
    };

    const handlePasswordFocus = () => {
        setIsPasswordFocused(true);
    };

    const handleBlur = () => {
        setIsEmailFocused(false);
        setIsPasswordFocused(false);
    };

    const handleCadastro = () => {
        if (!emailEhValido) {
            Alert.alert('Erro', 'Por favor, insira um e-mail válido.');
        } else if (!passwordEhValido) {
            Alert.alert('Erro', 'A senha deve ter pelo menos 8 caracteres.');
        } else if (email && password) {
            // Alert.alert('Cadastro realizado com sucesso!');
            navigation.navigate('Apelido', { email })
        }
        else {
            Alert.alert('Preencha os campos');
        }
    };

    const validatePassword = (text) => {
        const isValid = text.length >= 8;
        setPasswordEhValido(isValid);
        setPassword(text);
    };

    const validateEmail = (text) => {
        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text);
        setEmailEhValido(isValid);
        setEmail(text);
    };

    return (
        <>
            <SafeAreaView style={styles.background}>

                <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={100} style={styles.containerLogo}>
                    <Image style={styles.imgLogo} source={require('../../assets/logo.png')} />
                </KeyboardAvoidingView>

                <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={100} style={styles.container}>
                    <TextInput style={[styles.input,
                    {
                        borderBottomColor: isEmailFocused ? '#f67828' : '#5a5b5d',
                        backgroundColor: isEmailFocused ? '#24252a' : '#141519',
                    },]}
                        placeholder='E-mail'
                        placeholderTextColor='#dedfe0'
                        autoCorret={false}
                        onFocus={handleEmailFocus}
                        onBlur={handleBlur}
                        value={email}
                        onChangeText={(text) => validateEmail(text)}
                    />

                    <TextInput
                        style={[styles.input,
                        {
                            borderBottomColor: isPasswordFocused ? '#f67828' : '#5a5b5d',
                            backgroundColor: isPasswordFocused ? '#24252a' : '#141519',
                        },]}
                        placeholder='Senha'
                        placeholderTextColor='#dedfe0'
                        autoCorret={false}
                        onFocus={handlePasswordFocus}
                        onBlur={handleBlur}
                        secureTextEntry={true}
                        value={password}
                        onChangeText={(text) => validatePassword(text)}
                    />

                    <View style={styles.checkbox}>
                        <TouchableOpacity style={styles.checkboxContainer} onPress={toggleCheckbox}>
                            {isChecked ? (
                                <MaterialCommunityIcons name="checkbox-outline" size={26} color="#fff" />
                            ) : (
                                <MaterialCommunityIcons name="checkbox-blank-outline" size={26} color="#fff" />
                            )}
                            <Text style={styles.textoCheckbox}>Quero ser informado de todas as novidades e ofertas da Crunchyroll.</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.containerTextoCadastro}>
                        <Text style={styles.textoCadastro}>
                            Ao criar uma conta, você declara possuir mais de 16 anos e estar de acordo com nossos
                            <Text style={styles.textoEspecial}> Termos e Condições</Text> &
                            <Text style={styles.textoEspecial}> Política de Privacidade.</Text>
                        </Text>
                    </View>

                    <TouchableOpacity
                        style={[
                            styles.btnCriarConta,
                            {
                                backgroundColor: (email !== '' && password !== '') ? '#f67828' : '#000',
                                borderColor: (email !== '' && password !== '') ? '#f67828' : '#5a5b5d',
                            },
                            styles.textoCriarConta,
                            {
                                color: (email !== '' && password !== '') ? "#000" : '#5a5a5a',
                            }
                        ]}
                        onPress={handleCadastro}
                    >
                        <Text style={styles.textoCriarConta}>CRIAR CONTA</Text>
                    </TouchableOpacity>

                    <View style={styles.extra}>
                        <TouchableOpacity style={styles.btnExtra} onPress={() => { navigation.navigate('EmBreve') }}>
                            <Text style={styles.texto}>Já possui uma conta? <Text style={styles.textoEspecial}> Login</Text></Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>

            </SafeAreaView>
        </>
    )
}
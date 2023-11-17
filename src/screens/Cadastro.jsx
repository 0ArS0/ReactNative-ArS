import { View, Image, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Cadastro() {
    const [isChecked, setChecked] = useState(false);

    const toggleCheckbox = () => {
        setChecked(!isChecked);
    };


    return (
        <>
            <SafeAreaView style={styles.background}>

                <View style={styles.header}>
                    <TouchableOpacity>
                        <AntDesign name="close" size={24} color="#fff" />
                    </TouchableOpacity>
                    <Text style={styles.criar}>Criar Conta</Text>
                    <Text>       </Text>
                </View>

                <View style={styles.containerLogo}>
                    <Image style={styles.imgLogo} source={require('../../assets/logo.png')} />
                </View>

                <View style={styles.container}>
                    <TextInput
                        style={styles.input}
                        placeholder='E-mail'
                        placeholderTextColor='#dedfe0'
                        autoCorret={false}
                        onChange={(e) => { }}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Senha'
                        placeholderTextColor='#dedfe0'
                        autoCorret={false}
                        onChange={(e) => { }}
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

                    <Text style={styles.textoCadastro}>Ao criar uma conta, você declara possuir mais de 16 anos e estar de acordo com nossos <Text style={styles.textoEspecial}>Termos e Condições</Text> & <Text style={styles.textoEspecial}>Política de Privacidade.</Text></Text>

                    <TouchableOpacity style={styles.btnCriarConta}>
                        <Text style={styles.textoCriarConta}>CRIAR CONTA</Text>
                    </TouchableOpacity>

                    <View style={styles.extra}>
                        <TouchableOpacity style={styles.btnExtra}>
                            <Text style={styles.texto}>Já possui uma conta? <Text style={styles.textoEspecial}>Login</Text></Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 0.12,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
    },
    criar: {
        color: '#fff',
        fontSize: 20,
    },
    background: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000'
    },
    containerLogo: {
        flex: 0.4,
        justifyContent: 'flex-end',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: 20,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textoCheckbox: {
        marginLeft: 8,
        fontSize: 12,
        color: '#fff'
    },
    textoCadastro: {
        color: "#fff",
        textAlign: 'center',
        fontSize: 11,
    },
    textoEspecial: {
        color: '#f67828'
    },
    input: {
        width: '100%',
        paddingTop: 25,
        paddingBottom: 10,
        paddingHorizontal: 15,
        marginBottom: 20,
        backgroundColor: '#141519',
        color: '#FFF',
        borderBottomColor: '#5a5b5d',
        borderBottomWidth: 3,
        fontSize: 16
    },
    btnCriarConta: {
        backgroundColor: '#000',
        borderWidth: 2,
        borderColor: '#5a5a5a',
        width: '100%',
        height: 35,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textoCriarConta: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#5a5a5a'
    },
    extra: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 30,
    },
    btnExtra: {
        marginTop: 10,
    },
    texto: {
        color: '#fff'
    },

}) 
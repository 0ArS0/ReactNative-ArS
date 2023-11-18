import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function EmBreve({}) {
    const navigation = useNavigation()
    
    const cadastro = () => {
        navigation.navigate('Cadastro');
    }
    return (
        <>
            <SafeAreaView style={styles.background}>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.voltarContainer} onPress={cadastro}>
                        <Text style={styles.texto}>Cadastro (Clone)</Text>
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
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    texto: { 
        color: '#f67828', 
        fontSize: 30,
        marginBottom: 20
    }
})
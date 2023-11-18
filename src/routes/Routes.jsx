import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Cadastro from '../screens/Cadastro'
import EmBreve from '../screens/EmBreve'
import { AntDesign, Ionicons } from '@expo/vector-icons';
import Idk from '../screens/Apelido'
import Apelido from '../screens/Apelido'

const { Navigator, Screen } = createNativeStackNavigator()

export default function Routes() {
    return (
        <NavigationContainer>

            <Navigator
                initialRouteName='Cadastro'
                screenOptions={{ headerStyle: { backgroundColor: '#000' } }}>
                <Screen
                    name='EmBreve'
                    component={EmBreve}
                    options={{
                        title: 'EmBreve',
                        navigationBarColor: '#000',
                        headerTintColor: '#fff',
                        headerBackVisible: false
                    }}
                />
                <Screen
                    name='Cadastro'
                    component={Cadastro}
                    options={({ navigation }) => ({
                        title: 'Criar Conta',
                        headerStyle: {
                            backgroundColor: '#000',
                        },
                        headerTitleAlign: 'center',
                        headerTintColor: '#fff',
                        headerLeft: () => (
                            <AntDesign
                                name='close'
                                size={24}
                                color='#fff'
                                onPress={() => {
                                    navigation.navigate('EmBreve');
                                }}
                            />
                        ),
                    })}
                />
                <Screen
                    name='Apelido'
                    component={Apelido}
                    options={{
                        title: '',
                        headerTintColor: '#fff',
        
                    }}
                />
            </Navigator>
        </NavigationContainer>
    )
}

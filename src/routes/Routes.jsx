import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Cadastro from '../screens/Cadastro'


const { Navigator, Screen } = createNativeStackNavigator()

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false}}>
                <Screen
                    name='Cadastro'
                    component={Cadastro}
                />
            </Navigator>
        </NavigationContainer>
    )
}

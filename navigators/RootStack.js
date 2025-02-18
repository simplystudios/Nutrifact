import React from 'react'
import {NativeContainer, NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Scanner from "../screens/Scannerpage";
import Homepage from "../screens/Homepage";
import ProductInfo from '../screens/Productinfo';
import Search from '../screens/Search';

const Stack = createNativeStackNavigator();

const RootStack = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{headerTintColor:"#2e5274"}} name="Home" component={Homepage}/>
                <Stack.Screen  name="Scanner" component={Scanner}/>
                <Stack.Screen  options={{headerTintColor:"#2e5274"}} name="Search" component={Search}/>
                <Stack.Screen  name="Product" component={ProductInfo}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStack;
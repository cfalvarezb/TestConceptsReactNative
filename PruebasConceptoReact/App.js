/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    Image,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Cat from './src/funcion_components/cat.funcion.component';
import CafeClassComponent from './src/class_components/coffe.component';
import CafeFunctionComponent from './src/funcion_components/coffe.funcion.component';
import PizzaTraslator from './src/funcion_components/pizzatraslate.funcion.component';
import Touchables from './src/class_components/touchables.component';
import AppScrollView from './src/funcion_components/scrollview.funcion.component';
import KeyboardAvoidingComponent from './src/funcion_components/keyboardavoidingview.funcion.component';

const App: () => React$Node = () => {
    return (
    <>
    <ScrollView>
        <Text > First Text </Text> 
        <View>
            <Text > More Text </Text>
            <View style={{alignItems:"center"}}> 
                <Image source = {{uri:'https://i.morioh.com/3adba8f6f6.png'}}
                style = {
                    { width: 200, height: 200 }
                }
                /> 
            </View>
        </View> 
        <TextInput style = {{
                            height: 40,
                            borderColor: "red",
                            borderWidth: 1
                            }}
                    defaultValue = "Valor por defecto" 
        />
        <Cat name="Cristian" />
        <CafeClassComponent />
        <CafeFunctionComponent />
        <PizzaTraslator />
        <Touchables/>
        <AppScrollView />
        <KeyboardAvoidingComponent />  
    </ScrollView> 
      
    </>
    );
};

export default App;
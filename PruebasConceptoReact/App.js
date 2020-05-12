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
    RefreshControl
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
import RefreshControlFunction from './src/funcion_components/refreshcontrol.function.component';
import ModalFuncion from './src/funcion_components/modal.funcion.component';
import FaltListFuncion from './src/funcion_components/flatlist.funcion.component';

const App: () => React$Node = () => {
    function wait(timeout) {
        return new Promise(resolve => {
          setTimeout(resolve, timeout);
        });
      }
    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        console.log('Pasa por aca');
        wait(2000).then(() => setRefreshing(false));
      }, [refreshing]);
    return (
    <>
    <ScrollView 
    refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
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
        <RefreshControlFunction />
        <ModalFuncion />
        <FaltListFuncion />
    </ScrollView> 
      
    </>
    );
};

export default App;
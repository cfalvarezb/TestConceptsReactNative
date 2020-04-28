import React from 'react';
import { Text, View } from 'react-native';

export default function Cat(props) {
  return (
    <View>
      <Text>Hola soy el gato de { props.name }</Text>
    </View> 
  );
}
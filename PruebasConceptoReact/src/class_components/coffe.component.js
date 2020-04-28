import React, {Component} from 'react';
import { Button, Text, View } from 'react-native';

export class CatClassComponent extends Component{

    state = { isHungry: true};

    render(props){
        return(
            <View>
                <Text>
                    Yo soy { this.props.name }, y estoy { this.state.isHungry ? "Hambriento" : "Llenito" }
                </Text>
                <Button
                    onPress={ () => {
                        this.setState({ isHungry: !this.state.isHungry });
                    }}
                    title={
                        this.state.isHungry ? "Podrias darme chele" : "Gracias por darme chele"
                    }
                />
            </View>
        );
    }

}

export default class CafeClassComponent extends Component{
    render(){
        return(
            <>
            <CatClassComponent name="Alberto" />
            <CatClassComponent name="Rauuu" />
            </>
        );
    }
    
}
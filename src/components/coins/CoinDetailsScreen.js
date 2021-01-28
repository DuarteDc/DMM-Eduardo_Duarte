// importamos react 
import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';

class CoinDetailsScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.txt}>Pantalla De Detalle en React</Text>
            </View> 
        )
    }
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:"blue",
        flex:1
    },
    txt:{
        color:"#fff",
        textAlign:"center",
        marginTop:20
    }
})
export default CoinDetailsScreen;
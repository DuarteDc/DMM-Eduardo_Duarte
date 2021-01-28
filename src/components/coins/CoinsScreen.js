
import React, { Component } from 'react';

import {View, Text, Pressable, StyleSheet} from 'react-native';

class CoinsScreen extends Component{
    handlesPress=()=>{
        console.log("pantalla de detalle",this.props);
        this.props.navigation.navigate("CoinDetailsScreen");
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.btnText}>Mi primer pantalla en React</Text>
                <Pressable style={styles.btn} onPress={this.handlesPress}><Text style={styles.btnText}>Ir a detalle</Text></Pressable>
            </View>
        )
    }

}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "blue"
    },
    btn:{
        padding: 8,
        borderRadius:8,
        margin:22,
        backgroundColor: "red",
    },
    btnText:{
        color:"#fff",
        textAlign:"center"
    }
})

export default CoinsScreen;

import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';

class HomeScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.box1}><Text>Inicio</Text></View>
                <View style={styles.box2}>
                    <View style={styles.box21}></View>    
                    <View style={styles.box22}></View>
                    <View style={styles.box23}></View>
                </View>
                <View style={styles.box2}>
                    <View style={styles.box21}></View>    
                    <View style={styles.box22}></View>
                    <View style={styles.box23}></View>
                </View>
                <View style={styles.box2}>
                    <View style={styles.box21}></View>    
                    <View style={styles.box22}></View>
                    <View style={styles.box23}></View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1, fontWeight: '300', fontSize: 40,
    },
    box1: {
      flex: 1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor: '#2469A0',
      maxHeight:300,
      marginBottom: 30
    },
    box2: {
        flex:.5,
        flexDirection:'row',
        margin: 30,
        justifyContent:'center'
    },
    box21: {
        flex: 2,
        backgroundColor:'#ccc',
        width:100,
        margin:5
    },
    box22: {
        flex: 2,
        backgroundColor:'#000',
        flexDirection:'column',
        width:100,
        margin:5
    },
    box23: {
        flex: 2,
        backgroundColor:'#10BCE3',
        flexDirection:'column',
        width:100,
        margin:5
    },
});

export default HomeScreen;
    

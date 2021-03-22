import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';

class CategoryScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.box1}><Text>Categorias</Text></View>
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
                <View style={styles.box2}>
                    <View style={styles.box21}></View>    
                    <View style={styles.box22}></View>
                    <View style={styles.box23}></View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1, fontWeight: '300', fontSize: 40,
      },
      box1: {
        flex: 1,
        justifyContent:'center',
        maxHeight:50,
        marginBottom: 30,
        paddingLeft:10
      },
      box2: {
          flex:.5,
          flexDirection:'row',
          margin: 20,
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

export default CategoryScreen;
    


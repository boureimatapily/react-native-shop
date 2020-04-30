import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native'
import {AntDesign} from '@expo/vector-icons'

export class Item extends Component {
    render() {
        return (
            <ScrollView style={styles.container} >
                <View style={styles.ItemContainer}>
                    <AntDesign name="close" size={30} style={styles.close} />
                    <Image source={require('../assets/shoes.jpg')} style={styles.Itemimage} />
                    <View style={styles.ItemText}>
                        <Text style={styles.title}>LOW CLASSIC</Text>
                        <Text  style={styles.titleText}>Reachable choes Nike</Text>
                        <Text  style={styles.price}>$2450</Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal:10,
    },
    ItemContainer:{
        height:300,
        width:200,
        flexDirection:"column",
    },
    Itemimage:{
        height:140,
        width:150,
        alignSelf:"center"
    },
    close:{
        alignSelf:"flex-end",
        color:"gray"
    },
    ItemText:{
        alignItems:"center",
        justifyContent:"center"
    },
    title:{
        fontSize:20,
        fontWeight:"bold",
        color:"gray"
    },
    price:{
        fontWeight:"bold",
        fontSize:20
    }
})

export default Item

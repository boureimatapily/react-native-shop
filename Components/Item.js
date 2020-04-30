import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native'
import {AntDesign} from '@expo/vector-icons'

export class Item extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const {img} = this.props
        return (
            <View style={styles.container} >
                <View style={styles.ItemContainer}>
                    <AntDesign name="close" size={30} style={styles.close} />
                    <Image source={img} style={styles.Itemimage} />
                    <View style={styles.ItemText}>
                        <Text style={styles.title}> {this.props.name} </Text>
                        <Text  style={styles.titleText}> {this.props.detail} </Text>
                        <Text  style={styles.price}> {this.props.price} </Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal:10,
    },
    ItemContainer:{
        height:250,
        width:150,
    },
    Itemimage:{
        height:120,
        width:130,
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
        color:"gray",
        textTransform:"uppercase"
    },
    price:{
        fontWeight:"bold",
        fontSize:20
    }
})

export default Item

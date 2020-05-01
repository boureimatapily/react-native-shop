import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
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
                    <TouchableOpacity>
                        <AntDesign name="close" size={20} style={styles.close} />
                    </TouchableOpacity>
                    
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
   
    Itemimage:{
        height:125,
        width:130,
        alignSelf:"center",
        marginBottom:5
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

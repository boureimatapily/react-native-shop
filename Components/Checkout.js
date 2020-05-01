import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, FlatList, TouchableOpacity, Image } from 'react-native'
import { Feather, AntDesign, Octicons } from '@expo/vector-icons'

export class Checkout extends Component {

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.headerContainer}>
                    <TouchableOpacity>
                        <Text style={styles.headerShopes} >Shopes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.headerWhislist}>Check Out</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Feather name="shopping-cart" size={20} />
                    </TouchableOpacity>
                </View>

                <View style={styles.profile}>
                    <View style={styles.imageContainer} >
                        <Image source={require('../assets/moi.jpg')} style={styles.profileImage} />
                    </View>
                    <Text style={styles.profileName} >Boureima Tapily</Text>
                    <TouchableOpacity>
                         <AntDesign name="right" size={20} />
                    </TouchableOpacity>
                   

                </View>

                <View style={styles.allOrdersContainer}>
                    <View style={styles.allOrder} >
                        <Feather name="lock" size={20} style={styles.lock} />
                        <Text style={styles.lockText}>All Ordera</Text>
                    </View>
                    <TouchableOpacity>
                        <AntDesign name="right" size={20} /> 
                    </TouchableOpacity>
                   

                </View>

                <View style={styles.profileIcons}>
                    <TouchableOpacity>
                        <Feather name="shopping-bag" size={30} />
                        <Text>Receipts</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Feather name="tag" size={30} />
                        <Text>Tags</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Feather name="menu" size={30} />
                        <Text>List</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Octicons name="comment" size={30} />
                        <Text>comments</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Octicons name="gift" size={30} />
                        <Text>Gifts</Text>
                    </TouchableOpacity>

                </View>

                <View style={[styles.allOrdersContainer,styles.OffersHeight]}>
                    <View style={styles.allOrder} >
                        <Feather name="percent" size={30} style={styles.lock} />
                        <Text style={styles.lockText}>Offers</Text>
                    </View>
                    <TouchableOpacity> 
                        <AntDesign name="right" size={20} /> 
                    </TouchableOpacity>
                </View>

                <View style={styles.priceButtonContainer}>
                    <TouchableOpacity style={styles.button1}>
                        <Text style={styles.priceButtonTextColor}>$25</Text>
                        <Text style={styles.priceButtonTextColor}>No Threeholds</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button1}>
                        <Text style={styles.priceButtonTextColor}>$75</Text>
                        <Text style={styles.priceButtonTextColor}>Pull 500 pointa</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.allOrdersContainer}>
                    <View style={styles.allOrder} >
                        <Feather name="headphones" size={30} style={styles.lock} />
                        <Text style={styles.lockText}>Customer Support</Text>
                    </View>
                    <TouchableOpacity> 
                        <AntDesign name="right" size={20} /> 
                    </TouchableOpacity>
                </View>

                <View style={styles.allOrdersContainer}>
                    <View style={styles.allOrder} >
                        <Octicons name="location" size={30} style={styles.lock} />
                        <Text style={styles.lockText}>Shipping Address</Text>
                    </View>
                    <TouchableOpacity> 
                        <AntDesign name="right" size={20} /> 
                    </TouchableOpacity>
                </View>

                <View style={styles.allOrdersContainer}>
                    <View style={styles.allOrder} >
                        <Feather name="settings" size={30} style={styles.lock} />
                        <Text style={styles.lockText}>Settings</Text>
                    </View>
                    <TouchableOpacity> 
                        <AntDesign name="right" size={20} /> 
                    </TouchableOpacity>
                </View>


                <View style={styles.footerIcons} >
                    <TouchableOpacity>
                        <Feather name="menu" size={20} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Feather name="truck" size={20} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Feather name="search" size={20} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Feather name="shopping-bag" size={20} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Feather name="bell" size={20} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Feather name="user" size={20} />
                    </TouchableOpacity>
                </View>

            </ScrollView>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
    },
    priceButtonContainer:{
        flexDirection:"row",
        justifyContent:"space-around",
        borderTopWidth: 0.5,
        paddingTop: 10,
        borderTopColor: "gray"
       
    },
    OffersHeight:{
        height:60
    },
    button1:{
        height:60,
        width:120,
        backgroundColor:"#fa745c",
        alignItems:"flex-start",
        justifyContent:"center",
        borderWidth:1,
        borderRadius:10,
        paddingLeft:10,
    },
    priceButtonTextColor:{
        fontWeight:"bold",
        color:"white",
        fontSize:15
    },
    profileIcons:{
        flexDirection:"row",
        justifyContent:"space-around",
        marginVertical:20,
        borderTopWidth: 0.5,
        paddingTop: 10,
        borderTopColor: "gray"
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 20
    },
    headerShopes: {
        fontSize: 18,
        color: "red",
        fontWeight: "bold"
    },
    headerWhislist: {
        fontWeight: "bold",
        fontSize:16
    },
    profile: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderTopWidth: 0.5,
        paddingTop: 10,
        borderTopColor: "gray"
    },
    imageContainer: {
        borderRadius: 50,
        width: 70,
        height: 70,
        backgroundColor: "yellow",
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 50
    },
    profileName: {
        fontWeight: "bold",
        fontSize: 18
    },
    allOrdersContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 10,
        marginVertical: 10,
        borderTopWidth: 0.5,
        paddingTop: 10,
        borderTopColor: "gray"
    },
    allOrder: {
        flexDirection: "row",
    },
    lockText: {
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: 10
    },
    footerIcons: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 45
    },


})

export default Checkout

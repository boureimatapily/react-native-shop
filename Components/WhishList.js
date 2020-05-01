import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import Item from './Item'
import { Feather } from '@expo/vector-icons'

export class WhishList extends Component {

    List = [
        { id: "1", name: "Low classic", detail: "Reachable choes Nike", price: "$2450", image: require('../assets/shoes.jpg') },
        { id: "2", name: "Addidas", detail: "Unreachable choes Nike", price: "$3560", image: require('../assets/shoes1.jpg') },
        { id: "3", name: "Roadster", detail: "Expanding choes Nike", price: "$4892", image: require('../assets/shoes2.jpg') },
        { id: "4", name: "Nike", detail: "Knight Rider choes Nike", price: "$2598", image: require('../assets/shoes3.jpg') },
        
    ]


    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.headerContainer}>
                    <TouchableOpacity>
                        <Text style={styles.headerShopes} >Shopes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.headerWhislist}>Whish List</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Feather name="shopping-cart" size={20} />
                    </TouchableOpacity>
                </View>
                <FlatList
                    numColumns={2}
                    contentContainerStyle={{marginBottom:30}}
                    showsVerticalScrollIndicator={false}
                    data={this.List}
                    renderItem={({ item }) => {
                        return <Item name={item.name} detail={item.detail}
                            price={item.price} img={item.image} />
                    }}
                    keyExtractor={item => { item.id }}
                />

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
                              <Feather name="shopping-bag" size={20}/>
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
        marginHorizontal: 5,
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 50
    },
    headerShopes: {
        fontSize: 20,
        color: "red",
        fontWeight: "bold"
    },
    headerWhislist: {
        fontWeight: "bold",
        fontSize:16
    },
    footerIcons:{
       flexDirection:"row",
       justifyContent:"space-evenly",
        marginTop:50
    },


})

export default WhishList

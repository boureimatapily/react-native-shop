import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Item from './Components/Item';
import WhishList from './Components/WhishList';
import Checkout from './Components/Checkout';


export default function App() {
  return (
    <View style={styles.container}>
      
      {/* <Item /> */}
      <WhishList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:50
  },
});

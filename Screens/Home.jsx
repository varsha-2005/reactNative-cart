import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { FlatList } from 'react-native';
import { GlobalContext } from '../Context/Context1';

export default function Home() {
    const {Products} = useContext(GlobalContext)
    const renderCartItems = (item) => (
        <View style={styles.itemContainer}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
            <Text style={styles.itemCategory}>{item.category}</Text>
        </View>
    )
    console.log(Products)
  return (
    <View style={styles.container}>
      <FlatList
        data={Products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderCartItems}
      ></FlatList>
    </View>
  )
}

const styles = StyleSheet.create({})
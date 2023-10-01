import { View, Text, TextInput, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import React from 'react'
import { styles } from '../../Style'
import Ionicons from 'react-native-vector-icons/Ionicons';
const SearchBar = () => {
  return (
    <View style={styles.contentinput}>
    <TextInput
      style={styles.input}
      placeholder="Search"
      
    />
    <Ionicons style={styles.icons} name="search-outline" size={23} />
  </View>
  )
}

export default SearchBar
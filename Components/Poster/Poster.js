import React from 'react'
import { View, Text, TextInput, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { styles } from '../../Style'
const Poster = () => {
  return (
    <View style={styles.poster}>
        <View style={styles.posterdetail}>
          <View style={styles.postertextpart}>
            <Text style={[styles.postertext, { fontWeight: '400' }]}>Clearance</Text>
            <Text style={[styles.postertext, { fontWeight: '400' }]}>Sales</Text>
          </View>
          <View style={styles.postertextpart}>
            <TouchableOpacity style={styles.customButton}>
              <Text style={[styles.buttonText, { fontWeight: '500' }]}>% Up to 50%</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Image
              source={require('../../Image/narutoimg.png')}
              style={styles.posterimage}
            />
      </View>
  )
}

export default Poster
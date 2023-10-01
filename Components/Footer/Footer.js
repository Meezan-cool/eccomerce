import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { render } from 'react-dom';
// import { Ionicons } from '@expo/vector-icons'; // Make sure you import Ionicons from the correct package
import { styles } from '../../Style'

const Footer = () => {
  const [activeItem, setActiveItem] = useState('home'); // Initialize the active item state

//  useEffect(()=>{
//   console.warn(window.innerHeight);
//  },[])

  const handleFooterPress = (iconName) => {
    setActiveItem(iconName); // Update the active item when an item is pressed
  };

 

  const renderFooter = (itemName, iconName) => (
    <TouchableOpacity
      style={[styles.footeritem, activeItem === itemName && styles.activeItem]}
      onPress={() => handleFooterPress(iconName)}
    >
      <Ionicons
        name={activeItem === iconName ? iconName : `${iconName}-outline`} // Change icon name based on active item
        size={30}
        color={activeItem === iconName ? 'green' : 'black'} // Change color based on active item
      />
      <Text   style={{color:`${activeItem === iconName ? 'green' : 'black'}`}} >{itemName}</Text>
    </TouchableOpacity>
  );
  

  return (
    <View style={styles.footer}>
      {renderFooter('Home', 'home')}
      {renderFooter('Search', 'search')}
      {renderFooter('Favorites', 'heart')}
      {renderFooter('Profile', 'person')}
    </View>
  );
};



export default Footer;

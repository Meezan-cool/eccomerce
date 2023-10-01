// Header component
import React, { useEffect, useState } from "react";
import { styles } from "../../Style";
import { useSelector, useDispatch } from "react-redux";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
const Header = () => {
  const [checker, setChecker] = useState(false);
  const cartItems = useSelector((state) => state.cartItems);
  // const dispatch = useDispatch();
  const itemadded = cartItems.length;
  useEffect(() => {
    if (itemadded > 0) {
      setChecker(true);
    }
    else{
      setChecker(false)
    }
  },[cartItems]);
  // console.log(itemadded)
  const navigation = useNavigation();
  const goCart = () => {
    navigation.navigate("Cart");
  };
  return (
    <View style={styles.header}>
      <View style={styles.subheader}>
        <Text style={{ fontSize: 25, fontWeight: "400" }}>Discover</Text>
        <TouchableOpacity style={styles.contentimage} onPress={goCart}>
          <Image
            //   source={require('./Image/shop-icons.webp')}
            source={require("../../Image/shop-icons.webp")}
            style={styles.image}
          />
        {checker?  <Text style={styles.productAdded}>{itemadded}</Text>:null}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

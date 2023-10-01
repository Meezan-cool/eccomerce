import React, { useState } from "react";
import { View, Text, Image, Button, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { prostyles } from "./productStyle";
import { useDispatch } from 'react-redux';
import { addToCart } from './cartActions';

import { ScrollView } from "react-native-gesture-handler";
const ProductDetailScreen = () => {
  const [favorites, setFavorites] = useState(false);
  const route = useRoute();
  const { productData } = route.params;
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    console.log(productData)
    dispatch(addToCart(productData));
    navigation.navigate("Cart");
  };

  // Function to handle the button press and navigate back to the Home screen
  const handleBackToHome = () => {
    navigation.navigate("Home"); // Replace 'Home' with the name of your home screen
  };

  const handleSetFavorites = () => {
    setFavorites(!favorites);
  };
  return (
    <View style={prostyles.container}>
      {/* <ScrollView style={prostyles.supercontainer}> */}
      {/* Display product details */}
      <View style={prostyles.header}>
        <TouchableOpacity
          onPress={handleBackToHome}
          style={prostyles.iconholder}
        >
          <Ionicons name="chevron-back-outline" size={25}></Ionicons>
        </TouchableOpacity>

        <View style={prostyles.subheader}>
          <TouchableOpacity
            onPress={handleSetFavorites}
            style={prostyles.iconholder}
          >
            <Ionicons
              name={`${favorites ? "heart" : "heart-outline"}`}
              size={25}
              color={`${favorites ? "red" : "#000"}`}
            ></Ionicons>
          </TouchableOpacity>

          <TouchableOpacity style={prostyles.iconholder}>
            <Ionicons name="share-outline" size={23}></Ionicons>
          </TouchableOpacity>
        </View>
      </View>

      <View style={prostyles.Imagecontainer}>
        <Image source={productData.image} style={prostyles.img} />
      </View>

      <View style={prostyles.productDetail}>
        <View style={prostyles.productnamestatus}>
          <Text style={[prostyles.productname, { fontWeight: 800 }]}>
            {productData.name}
          </Text>
          <TouchableOpacity style={prostyles.status}>
            <Text style={[prostyles.statusname, { fontWeight: 600 }]}>
              % {productData.status}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={prostyles.ratelikereview}>
          <View style={prostyles.greyborder}>
            <Text style={prostyles.rate}>
              {" "}
              <Ionicons
                style={{ position: "relative" }}
                name="star"
                size={17}
                color={"#ff9e2d"}
              />{" "}
              {productData.rating}
            </Text>
          </View>

          <View style={prostyles.greyborder}>
            <Text style={prostyles.liked}>
              <Ionicons
                name="thumbs-up-sharp"
                style={{ position: "relative" }}
                size={17}
                color={"#19C463"}
              />{" "}
              {productData.liked} %
            </Text>
          </View>
          <Text style={[prostyles.reviews, { fontWeight: 500 }]}>
            {productData.reviews} reviews
          </Text>
        </View>

        <Text style={[prostyles.description, { fontWeight: 500 }]}>
          {productData.description}
        </Text>

        <View style={prostyles.bottompart}>
          <View style={prostyles.subbottompart}>
            <View style={prostyles.productprices}>
              <View style={{position:'relative'}}>
                <View style={prostyles.diagonaline}></View>
                <Text style={[prostyles.productpreprices, { fontWeight: 500 }]}>
                  ${productData.wodisprice}
                </Text>
              </View>
              <Text style={[prostyles.productnewprices, { fontWeight: 600 }]}>
                {productData.price}
              </Text>
            </View>
            <TouchableOpacity style={prostyles.addcart} onPress={handleAddToCart}>
              <Text style={[prostyles.addcarttxt, { fontWeight: 600 }]}>
                Add to Cart
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* </ScrollView> */}
    </View>
  );
};

export default ProductDetailScreen;

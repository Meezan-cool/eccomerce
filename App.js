
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ProductDetailScreen from "./ProductDetailScreen"; // Import your product detail view component
import React, { useState, useEffect } from "react";
import { styles } from "./Style";
import {View,Button,Text,TextInput,Image,TouchableOpacity,ScrollView,FlatList,StyleSheet} from "react-native";
import Header from "./Components/Header/Header";
import SearchBar from "./Components/SearchBar/SearchBar";
import Poster from "./Components/Poster/Poster";
import CategorySection from "./Components/CategorySection/CategorySection";
import Footer from "./Components/Footer/Footer";
import CartScreen from "./CartScreen";
import { Provider } from "react-redux";
import store from "./store";
const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ProductDetail"
            component={ProductDetailScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Cart"
            component={CartScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header />
      <SearchBar />

        <Poster />
        <CategorySection />
      <Footer />
    </View>
  );
}

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "../../Style";
import { categories } from "../../data";
import { Ionicons } from "@expo/vector-icons";
import {
  smartTVsData,
  smartphonesData,
  laptopsData,
  headphonesData,
} from "../../itemdata";
import { VirtualizedList } from "react-native-web";

const CategorySection = () => {
  const navigation = useNavigation();

  const [selectedItem, setSelectedItem] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    if (selectedCategory === "All") {
      // Initialize the component by displaying 'All' products
      setSelectedCategory("All");
      setSelectedProducts([
        ...smartphonesData,
        ...headphonesData,
        ...laptopsData,
        ...smartTVsData,
      ]);
    } else {
      // console.warn('hello');
    }
  }, []);

  const handleItemPress = (itemIndex, category) => {
    // const handleItemPress = (itemIndex, category) => {
    // Navigate to the ProductDetail screen and pass the selected product data
    // navigation.navigate('ProductDetail', { productData: selectedProducts[itemIndex] });
    // };

    if (selectedItem === itemIndex) {
      setSelectedItem(itemIndex);
      setSelectedCategory(category); // Reset to 'All' category
    } else {
      setSelectedItem(itemIndex);
      setSelectedCategory(category);

      // Set selected products based on the category
      switch (category) {
        case "All":
          setSelectedProducts([
            ...smartphonesData,
            ...headphonesData,
            ...laptopsData,
            ...smartTVsData,
          ]);
          break;
        case "Smartphones":
          setSelectedProducts(smartphonesData);
          break;
        case "Headphones":
          setSelectedProducts(headphonesData);
          break;
        case "Laptop":
          setSelectedProducts(laptopsData);
          break;
        case "Smart TV":
          setSelectedProducts(smartTVsData);
          break;
        default:
          setSelectedProducts([]);
          break;
      }
    }
  };
  const handleProductPress = (itemIndex, category) => {
    // console.log({productData: selectedProducts[itemIndex]});
    navigation.navigate("ProductDetail", {
      productData: selectedProducts[itemIndex],
    });
  };
  const renderItem = ({ item, index }) => (
    <TouchableOpacity onPress={() => handleItemPress(index, item.name)}>
      <View
        style={[
          styles.item,
          {
            backgroundColor: selectedItem === index ? "#19c463" : "transparent",
            borderColor: selectedItem === index ? "transparent" : "#000",
          },
        ]}
      >
        <Text
          style={[
            styles.itemText,
            { color: selectedItem === index ? "#fff" : "#000" },
          ]}
        >
          {item.name}
        </Text>
      </View>
    </TouchableOpacity>
  );

  const renderCategoryResult = () => {
    if (selectedCategory === null) {
      return null;
    }
    const lastIndex = selectedProducts.length - 1;
    return (
      // <View >
      // <ScrollView>

      <View style={styles.productcontainer}>
             {/* <FlatList
              horizontal
              data={categories}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
              showsHorizontalScrollIndicator={false}
              />
               */}
        <FlatList
          showsVerticalScrollIndicator={false}
          data={selectedProducts}
          // style={{ marginBottom: 410 }}
          numColumns={2}
          contentContainerStyle={styles.productGrid}
          renderItem={({ item, index }) => (
            <View
              key={index}
              style={[
                styles.productItem,
                index % 2 === 0 && styles.productItemGap,
                index === lastIndex && { marginRight: 0,paddingBottom:20 },
              ]}
            >
              <TouchableOpacity
                onPress={() => handleProductPress(index, selectedCategory)}
                style={styles.touchable}
              >
                <View style={styles.productimagecontainer}>
                  {/* <Image source={require(`../../Image/lap-1.png`)} style={styles.productImage} /> */}
                  <Image source={item.image} style={styles.productImage} />
                </View>

                <Text
                  style={{
                    alignSelf: "flex-start",
                    fontSize: 15,
                    fontWeight: 500,
                    color: "#898989",
                  }}
                >
                  {item.name}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      alignSelf: "flex-start",
                      fontSize: 17,
                      fontWeight: 600,
                    }}
                  >
                    {item.price}
                  </Text>
                  <Text
                    style={[styles.productrating, { alignSelf: "flex-start" }]}
                  >
                    <Ionicons
                      style={{ position: "relative", top: 0.5 }}
                      name="star"
                      size={17}
                      color={"#ff9e2d"}
                    />{" "}
                    {item.rating}
                  </Text>
                </View>

                {/* </View> */}
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          ListHeaderComponent={
            <FlatList
              horizontal
              data={categories}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
              showsHorizontalScrollIndicator={false}
            />
          }
        />
      </View>
    );
  };

  return (
    <View style={styles.categorySection}>
      <View style={styles.categoryText}>
        <Text style={styles.categoryText1}>Categories</Text>
        <Text style={styles.categoryText2}>See all</Text>
      </View>
      {renderCategoryResult()}
    </View>
  );
};

export default CategorySection;

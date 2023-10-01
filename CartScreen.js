import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "./cartActions";
import {
  View,
  Text,
  ScrollView,
  FlatList,
  VirtualizedList,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { cartstyles } from "./cartStyle";
import CartItem from "./CartItem";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const CartScreen = () => {
  const navigation = useNavigation();
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  // console.log(cartItems);

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };
  const goBack = () => {
    navigation.navigate("Home");
  };
  // const lastIndex = selectedProducts.length - 1;
  // const renderItem = ({ item }) => (
  //   <CartItem item={item} onRemove={() => handleRemoveFromCart(item.id)} />
  // );
  // ...

  return (
    <View style={cartstyles.container}>
      <View style={cartstyles.header}>
        <TouchableOpacity onPress={goBack} style={cartstyles.iconholder}>
          <Ionicons name="chevron-back-outline" size={25} />
        </TouchableOpacity>

        <Text style={[cartstyles.carttxt, { fontWeight: 500 }]}>My cart</Text>

        <TouchableOpacity style={cartstyles.iconholder}>
          <Ionicons name="ellipsis-horizontal" size={25} />
        </TouchableOpacity>
      </View>
      {/* 
      <FlatList
      showsVerticalScrollIndicator={false}
        data={cartItems}
        style={{width:'87%',position:'relative',top:'13%'}}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CartItem item={item} onRemove={() => handleRemoveFromCart(item.id)} />
        )}
      /> */}
      <View 
      style={{ width:'100%', height:'65%',alignItems:'center',justifyContent:'center'}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={cartItems}
          // style={{width:'87%',position:'relative',top:'13%'}}
          style={{ width: "87%",marginTop: "27%",position:'relative',zIndex:1 }}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <CartItem
              item={item}
              onRemove={() => handleRemoveFromCart(item.id)}
              isLastItem={index === cartItems.length - 1}
            />
          )}
        />
        
       

      </View>
      <View style={[cartstyles.bottomcart]}>
          <View style={cartstyles.promocode}>
            <View style={cartstyles.subpromocode}>

             <Text style={[cartstyles.leftcodetxt,{fontWeight:800}]}>ADJ3AK</Text>

             <View style={[cartstyles.rightsidepromo]}>
              <Text style={[cartstyles.rightprotxt,{fontWeight:600}]}>Promocode applied </Text>
              <Ionicons name="checkmark-circle" size={20} color={'#19C463'}></Ionicons>
              </View>
            </View>

          </View>

          <View style={cartstyles.totalcost}>

            <View style={cartstyles.receiptitem} >
            <Text style={[cartstyles.lefttxtcart,{fontWeight:500}]}>Subtotal:</Text>
            <Text style={[cartstyles.pricecart,{fontWeight:800}]}>{"$999"}</Text>
            </View>

            <View style={cartstyles.receiptitem}>
            <Text style={[cartstyles.lefttxtcart,{fontWeight:500}]}>Deivery fee:</Text>
            <Text style={[cartstyles.pricecart,{fontWeight:800}]}>{"$40"}</Text>
            </View>

            <View style={cartstyles.receiptitem}>
            <Text style={[cartstyles.lefttxtcart,{fontWeight:500}]}>Discount:</Text>
            <Text style={[cartstyles.pricecart,{fontWeight:800}]}>{"40%"}</Text>
            </View>
             
          </View>

          <View style={cartstyles.checkout}>

            <TouchableOpacity style={cartstyles.checkoutbtn}>
              <Text style={[cartstyles.checkoutxt,{fontWeight:600}]}>Checkout for $480</Text>
            </TouchableOpacity>

          </View>

        </View>
    </View>

  );
};
export default CartScreen;

// CartItem.js
import React,{useState} from "react";
import { View, Text, TouchableOpacity, Image, Button } from "react-native";
import { cartstyles } from "./cartStyle";
import Ionicons from "react-native-vector-icons/Ionicons";
const CartItem = ({ item, onRemove,isLastItem  }) => {
  const [count,setCount]=useState(1);

  const incre=()=>{
    if(count>0){
      setCount(count+1);
    }
  }
  const decre=()=>{
    if(count>1){
      setCount(count-1);
    }
  }
  // const nowprice= count
  return (
    <View style={[cartstyles.cartlist, isLastItem ? 
    { marginBottom: 0,borderBottomWidth:0,paddingBottom:0} : null]}>

      <View style={cartstyles.imageholder}>
        <Image source={item.image} style={cartstyles.img} />
      </View>

      <View style={cartstyles.orderitem}>
        <View style={cartstyles.removeitem}>
          <Text style={[cartstyles.productxt,{fontWeight:700}]}>{item.name}</Text>
          <TouchableOpacity onPress={onRemove} >
            <Ionicons name="close-outline" size={25} color={'grey'}></Ionicons>
          </TouchableOpacity>
        </View>

        <View style={cartstyles.pricecounter}>
          <Text style={[cartstyles.productprice,{fontWeight:700}]}>${item.price*count}</Text>
          <View style={cartstyles.counter}>
            <TouchableOpacity  style={cartstyles.increItem} onPress={decre}>
            <Ionicons name="remove-outline" size={23}></Ionicons>
            </TouchableOpacity>

            <Text style={[cartstyles.countxt,{fontWeight:600}]}>{count}</Text>

            <TouchableOpacity style={[cartstyles.increItem,{borderColor:'#19C463'}]} 
            onPress={incre}>
            <Ionicons name="add-outline" size={23} color={'#19C463'}></Ionicons>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartItem;

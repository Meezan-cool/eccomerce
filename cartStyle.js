import { StyleSheet } from "react-native";
export const cartstyles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#fff",
  },
  header: {
    width: "87%",
    position: "absolute",
    top: "5%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 4,
  },
  iconholder: {
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    width: 45,
    borderRadius: 50,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#f1f3f2",
  },
  carttxt: {
    fontSize: 18,
  },
  // itemapping:{
  //  width:'87%',
  //  alignItems:'center',
  //  justifyContent:'center'
  // },
  cartlist: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: "#f1f3f2",
    borderBottomWidth: 2,
    paddingBottom: 15,
    marginBottom: 15,
  },

  imageholder: {
    width: "35%",
    // width:120,
    height: 120,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f1f3f2",
    borderRadius: 8,
    // backgroundColor:'black'
    flexBasis: "35%",
  },
  img: {
    width: 100,
    height: 100,
    objectFit: "contain",
  },
  orderitem: {
    flexBasis: "62.7%",
    // width: "63%",
    alignSelf: "flex-start",
    height: 100,
    justifyContent: "space-between",
    // backgroundColor:'black',
  },
  removeitem: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  productxt: {
    fontSize: 16,
  },
  pricecounter: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    // gap:10
  },
  productprice: {
    fontSize: 17,
  },
  counter: {
    flexDirection: "row",
    alignItems: "center",
  },
  increItem: {
    borderWidth: 2,
    height: 35,
    width: 35,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#f1f3f2",
    borderRadius: 10,
  },
  countxt: {
    fontSize: 16,
    width: 30,
    textAlign: "center",
  },
  bottomcart: {
    position: "absolute",
    bottom: 0,
    left: 0,
    zIndex:20,
    width: "100%",
    gap:20,
    alignItems: "center",
    justifyContent: "center",
  },
  totalcost: {
    width: "85%",
    gap:10,
    alignItems:'center'
  },
  receiptitem: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  lefttxtcart:{
    fontSize:15,
   
  },
  pricecart:{
    fontSize:16,
  },
  promocode: {
    width:'87%',
    height:60,
    borderColor:'#f1f3f2',
    borderWidth:2,
    borderRadius:15,
    alignItems:'center',
    justifyContent:'center'
  },
  subpromocode:{
    flexDirection:'row',
    width:'90%',
    alignItems:'center',
    justifyContent:'space-between'
  },
  leftcodetxt:{

  },
  rightsidepromo:{
   flexDirection:'row',
   alignItems:'center',
   justifyContent:'center'
  },
  rightprotxt:{
  textAlign:'center',
  textAlignVertical:'center',
  color:"#19C463"
  },
  totalitem: {},
  checkout: {
    width: "100%",
    height: 90,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#f1f3f2",
    borderTopWidth: 2,
  },
  checkoutbtn: {
    height:'65%',
    width:'87%',
    backgroundColor:'#19C463',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:15,
  },
  checkoutxt:{
    color:'#fff',
    fontSize:17
  },

});

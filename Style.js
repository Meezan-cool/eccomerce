import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    height: "100%",
    // flex:1,
    width: "100%",
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
    // rowGap:10
    paddingTop: "7%",
    gap: 10,
    position: "relative",
  },
  subcontainer:{
  //  position:'relative',
  //  left:'5%',
// justifyContent:'center',
    width:'100%',
  },
  header: {
    height: 70,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  subheader: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  contentimage: {
    borderWidth: 2, // Set the border width
    borderColor: "#ccc", // Set the border color
    borderRadius: 50, // Set the border radius for rounded corners
    padding: 7,
  },
  image: {
    // fontSize:20
    width: 25,
    height: 25,
    position: "relative",
    resizeMode: "contain",
    top: "-2%",
    left: "2%",
  },
  productAdded:{
    position:'absolute',
    top:-4,
    right:-5,
    backgroundColor:'#19c463',
    height:17,
    width:17,
    fontSize:11,
    textAlign:'center',
    textAlignVertical:'center',
    color:'#fff',
    borderRadius:50,
  },
  contentinput: {
    width: "90%",
    position: "relative",
    height: 50,
    marginBottom: 15,
    alignItems: "center",
  },
  input: {
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: "#f1f1f1",
    borderRadius: 10,
    paddingLeft: 20,
    top: 0,
    left: 0,
  },
  icons: {
    position: "absolute",
    top: 11,
    right: 20,
  },
  poster: {
    width: "90%",
    height: 170,
    backgroundColor: "#19c463",
    borderRadius: 20,
    flexDirection: "row",
    overflow: "hidden",
    position: "relative",
  },
  posterdetail: {
    // backgroundColor:'#000',
    flexBasis: "50%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  postertextpart: {
    // backgroundColor:'#000',
    width: "90%",
    // height:'60%'
  },
  postertext: {
    color: "#fff",
    fontSize: 30,
    paddingLeft: "4%",
  },
  posterimage: {
    flexBasis: "50%",
    height: "100%",
    position: "relative",
    left: 0,
  },
  customButton: {
    width: 115,
    backgroundColor: "#ffffff",
    paddingVertical: 7,
    paddingHorizontal: 14,
    borderRadius: 25,
    position: "relative",
    left: "2%",
  },
  buttonText: {
    color: "#19c463",
  },
  categorySection: {
    width: "90%",
    flexDirection: "column",
  },
  categoryText: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    width: "100%",
    color: "#fff",
    paddingVertical: 10,
  },
  categoryText1: {
    fontSize: 20,
  },
  categoryText2: {
    fontSize: 20,
    color: "#19c463",
  },
  horizontalScroller: {
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "100%",
  },
  item: {
    flexDirection: "row",
    borderWidth: 1.2,
    borderColor: "#000",
    color: "#fff",
    minWidth: "auto",
    paddingVertical: 7,
    paddingHorizontal: 10,
    marginRight: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  itemText: {
    color: "#000",
    fontSize: 17,
  },
  footer: {
    height: 70,
    width: "100%",
    // height:'100%',
    display: "flex",
    // flexDirection:'row',
    alignItems: "center",

    flexDirection: "row",
    justifyContent: "space-around",
    position: "absolute",
    bottom: -1,
    left: 0,
    backgroundColor: "#ffffff",
    //  backgroundColor:'#000'
  },
  footeritem: {
    alignItems: "center",
    gap: 3,
  },
  activeItem: {
    color: "#19c463",
  },
  // Main Container
  productcontainer: {
    width: "100%",
    height:'62%',
    // paddingBottom:20,
    // backgroundColor: "aliceblue",
    // alignItems: "space-between",
    // alignItems:'center',
    // flexDirection:'column',
    position: "relative",
    // top: 10,
    // marginBottom:90,
    // gap:20
  },
  productItemGap:{
    marginRight: 18,
  },
  // Full Product Item
  productItem: {
    flex: 1,
    
    flexWrap:'wrap',
    alignItems: "center",
    marginTop:20
  },
  touchable:{
  width:'100%',
  gap:5,
  },
  productGrid: {
    // marginBottom:500
  },
  // Image container Background
  productimagecontainer: {
    width:"100%",
    height:180,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
    backgroundColor: "#f1f3f2",
  },
  productImage: {
    width: 120,
    height: 120,
    objectFit:'contain'
  },
  productrating:{
    fontSize:17,
    // fontWeight:600,
    position:'relative',
    top:-1,
    left:-3,
  }
});

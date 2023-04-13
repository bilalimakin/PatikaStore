import { Dimensions, StyleSheet } from "react-native";



export default StyleSheet.create({
    container: {
        margin:7.5,
        backgroundColor:"#eceff1",
        borderRadius:10,
        
        
        

        
    },
    imageview:{
        padding:7.5,
    },
    image_product:{
        height: 160,
        width:165,
        borderRadius:10, 
              
    },
    product_title:{
        fontSize:20,
        fontFamily:"Nunito",
        fontWeight:"bold",
        color:"black",
        width:180,
        paddingLeft:7,
        paddingRight:7,
    },
    product_price:{
        fontSize:18,
        fontWeight:"bold",
        paddingLeft:7,
        paddingRight:7,
        

    },
    
    product_inStock:{
        fontSize:18,
        fontWeight:"bold",
        color:"red",
        paddingLeft:7,
        paddingRight:7,
    },
})
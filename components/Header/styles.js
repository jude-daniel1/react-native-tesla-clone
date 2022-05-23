import { StyleSheet, Dimensions } from "react-native"


const styles = StyleSheet.create({
    container:{
      position:'absolute',
      top:10,
      zIndex:100,
      flexDirection:'row',
      justifyContent:'space-between',
      width:"100%",
      alignItems:"center",
      paddingHorizontal:10
      

    },

    logo:{
        width:100,
        height:20,
        resizeMode:'contain',
    },
    menu:{
        width: 25,
        height:25,
        resizeMode:'contain',
    }
})


export default styles;
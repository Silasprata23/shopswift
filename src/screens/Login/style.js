import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({

    containerHome: {
      paddingHorizontal: 20,
        gap:110,
    },

    contentHome:{
        gap:40,

    },
    containerForm:{
        gap:40,
    },
    containerInputs:{
        gap:25,
    },
    input:{
        borderWidth:1,
        borderColor:'#2d3133',
        borderRadius:7,
    },

    buttonLogin:{
        backgroundColor:'#375ee7',
        borderRadius:7,
        paddingVertical: 15,
    },
    txtLogin:{
        color:'#ffffff',
        fontWeight:'bold',
        textAlign:'center',
    },

    txtNaotemconta:{
        textAlign:'center',
    },
    txtCriarconta:{
      color:'#375ee7',
      textDecorationLine:'underline',
    },


    txtTitulo:{
        color: '#2d3133',
        fontSize:40,
        fontWeight: "700"
    },
    txtHighlights:{
        color:'#375ee7'
    }

})
// import {StyleSheet} from 'react-native';
//
// export const styles = StyleSheet.create({
//
//     containerRes:{
//       paddingHorizontal: 20,
//         gap: 110,
//     },
//
//     contentRes:{
//         gap:40,
//
//     },
//
//     contentform:{
//         gap:40,
//     },
//
//     containerInputs:{
//     gap:25,
//     },
// input:{
//     borderWidth:1,
//         borderColor:'#2d3133',
//         borderRadius:7,
// },
//
// buttonLogin:{
//     backgroundColor:'#375ee7',
//         borderRadius:7,
//         paddingVertical: 15,
// },
// txtLogin:{
//     color:'#ffffff',
//         fontWeight:'bold',
//         textAlign:'center',
// },
//
//         txtNaotemconta:{
//          textAlign:'center',
// },
//         txtCriarconta:{
//             color:'#375ee7',
//         textDecorationLine:'underline',
// },
//
//
// txtTitulo:{
//     color: '#2d3133',
//         fontSize:40,
//         fontWeight: "700"
// },
// txtHighlights:{
//     color:'#375ee7'
// }
//
// })

import styled from "styled-components/native";

export const Container = styled.View`
    gap: 110px;
    padding: 0 20px;
`

export const TextTitle = styled.Text`
    font-size: 40px;
    font-weight: 700;
    width: 300px;
`

export const TextHighlight = styled.Text`
    color: #375EE7
`

export const FormContainer = styled.View`
    gap: 40px;
`

export const InputsContainer = styled.View`
    gap: 25px;
`
export const TextLabel = styled.Text`
    font-size: 20px;
`

export const Input = styled.TextInput`
    border: 1px solid #2D3133;
    border-radius: 7px;
`
export const ContentCadastro = styled.View`
    gap: 40px;
`

export const CreateAccountButton = styled.Pressable`
    background-color: #375EE7;
    border-radius: 7px;
    padding: 15px 0;
`

export const TextButton = styled.Text`
    color: #ffffff;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
`

export const TextLogin = styled.Text`
    font-size: 16px;
    text-align: center;
`

export const TextNavigation = styled.Text`
    color: #375EE7;
    text-decoration: underline;
`


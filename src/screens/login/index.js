import {Image, Text, View} from "react-native";
import logo from "../../assets/Logo.png";
import {styles} from "./style";

export const Login = () =>{
    return (
        <View>
            <Image source={logo}/>
            <Text style={styles.txtTitulo}>Faça login e se <Text style={styles.txtHighlights}>surpreenda</Text></Text>
        </View>
    )
}
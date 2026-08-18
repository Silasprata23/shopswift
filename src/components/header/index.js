import {View, Text, Image, StyleSheet} from "react-native";
import baixo from "../../assets/carrorebaixado.png"


export const Header = () => {
    return (
        <View>
            <Image style={styles.img} source={baixo} />
            <Text>Eu sou o header</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    img:{
        width: 300,
        height: 200,
    }

})
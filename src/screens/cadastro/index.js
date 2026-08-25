import {View, Image, Text, TextInput, Pressable} from "react-native";
import logo from "../../assets/logoShopSwift.png"
import {styles} from "./style";
export const Register = () => {
    return (
        <View style={styles.containerRes}>
           <Image source={logo}/>

            <View style={styles.contentRes}>
                <Text style={styles.txtTitulo}>Crie uma conta  <Text style={styles.txtHighlights}> e se surpreenda</Text> </Text>

                <View style={styles.contentform}>
                    <View style={styles.containerInputs}>

                        <View>
                            <Text>E-mail:</Text>
                            <TextInput keyboardType={"email-address"} style={styles.input}/>
                        </View>

                        <View>
                            <Text>Senha:</Text>
                            <TextInput secureTextEntry={true} style={styles.input}/>
                        </View>
                    </View>

                    <Pressable style={styles.buttonLogin}>
                        <Text style={styles.txtLogin}>Criar conta</Text>
                    </Pressable>

                </View>

                <Text style={styles.txtNaotemconta}>Já tem conta? <Text style={styles.txtCriarconta} >Fazer login</Text> </Text>

            </View>

        </View>
    )
}
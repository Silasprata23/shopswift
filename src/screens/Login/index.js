import {Image, Pressable, Text, TextInput, View} from "react-native";
import logo from "../../assets/logoShopSwift.png";
import {styles} from "./style";
import {useNavigation} from "@react-navigation/native";
import {SafeAreaView} from "react-native-safe-area-context";

export const Login = () =>{

    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <View style={styles.containerHome}>
                <Image source={logo}/>

                <View style={styles.contentHome}>

                    <Text style={styles.txtTitulo}>Faça login e se <Text style={styles.txtHighlights}>surpreenda</Text></Text>

                    <View style={styles.containerForm}>

                        <View style={styles.containerInputs}>
                            <View>
                                <Text>E-mail:</Text>
                                <TextInput keyboardType='email-address'  style={styles.input} />
                            </View>

                            <View>
                                <Text>Senha:</Text>
                                <TextInput secureTextEntry={true} style={styles.input} />
                            </View>
                        </View>


                        <Pressable style={styles.buttonLogin} onPress={()=>{
                            navigation.navigate("home");
                        }}>
                            <Text style={styles.txtLogin}>Entrar</Text>
                        </Pressable>

                    </View>

                    <Text style={styles.txtNaotemconta}>Não tem uma conta? <Text style={styles.txtCriarconta}>Criar conta</Text> </Text>

                </View>

            </View>
        </SafeAreaView>


    )
}
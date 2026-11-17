import {View, Image, TextInput, Pressable, Text} from "react-native";
import {
    CantainerForm,
    ContainerContact, Input,
    MapContainer,
    MapsImage,
    MapText,
    MessageText,
    TextHighlight,
    TextLabel
} from "./style";
import logo from "../../assets/logoShopSwift.png"
import Map from "../../assets/mapa.png"
export const Contato = () =>{
    return (
        <ContainerContact>
            <Image source={logo}/>



            <CantainerForm>
                <MessageText>Mande uma <Text>Mensagem</Text></MessageText>

                <View>
                    <TextLabel>Nome:</TextLabel>
                    <Input/>
                </View>
                <View>
                    <TextLabel>Assunto:</TextLabel>
                    <Input/>
                </View>
                <View>
                    <TextLabel>Mensagem:</TextLabel>
                    <Input/>
                </View>

                <Pressable>
                    <Text>Enviar</Text>
                </Pressable>

            </CantainerForm>

            <MapContainer>
                <MapText>Venha nod <TextHighlight>Visitar</TextHighlight></MapText>
                <MapsImage source={Map}/>
            </MapContainer>

        </ContainerContact>
    )
}
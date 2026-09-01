import {View, Image, Text, TextInput, Pressable} from "react-native";
import logo from "../../assets/logoShopSwift.png"
import {
    Container,
    ContentCadastro,
    CreateAccountButton,
    FormContainer,
    Input,
    InputsContainer, TextButton,
    TextHighlight, TextLogin, TextNavigation,
    TextTitle
} from "./style";


export const Register = () => {
    return (
        <Container>
           <Image source={logo}/>

            <ContentCadastro>
                <TextTitle>Crie uma conta  <TextHighlight> e se surpreenda</TextHighlight> </TextTitle>

                <FormContainer>
                    <InputsContainer>

                        <View>
                            <Text>E-mail:</Text>
                            <Input keyboardType={"email-address"}/>
                        </View>

                        <View>
                            <Text>Senha:</Text>
                            <Input pa secureTextEntry={true} />
                        </View>
                    </InputsContainer>

                    <CreateAccountButton>
                        <TextButton>Criar conta</TextButton>
                    </CreateAccountButton>

                </FormContainer>

                <TextLogin>Já tem conta? <TextNavigation>Fazer login</TextNavigation> </TextLogin>

            </ContentCadastro>

        </Container>
    )
}
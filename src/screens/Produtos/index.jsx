import {ScrollView, Image, View,Pressable} from "react-native";
import Logo from "../../assets/logoShopSwift.png"
import iconFillt from "../../assets/iconFill.png"
import {ProductsSection} from "../../components/ProductsSection";
import {ContainerProducts, InputContainer, InputSearch} from "./style";


export const Produtos = () => {
    return (
        <ScrollView>
            <ContainerProducts>
                <Image source={Logo}/>

                <InputContainer>
                    <InputSearch/>
                    <Pressable>
                        <Image source={iconFillt}/>
                    </Pressable>
                </InputContainer>

                <ProductsSection/>
            </ContainerProducts>
        </ScrollView>

    )
}
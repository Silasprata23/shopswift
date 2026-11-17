import {View, Text, ScrollView} from "react-native";
import {TextTitle, TextHighlight, ContainerCategory, Scroll} from "./style";
import {CardCategory} from "./CardCategory";
import Camiseta from "../../assets/Camiseta.png"
import Eletronicos from "../../assets/Eletronico.png"
import Jogos from "../../assets/Jogos.png"
import Eletrodomesticos from "../../assets/Eletrodomesticos.png"
import Tenis from "../../assets/Tenis.png"

export const CategorySection = () => {
    return (
        <ContainerCategory>
            <TextTitle>Nossas <TextHighlight> Categorias</TextHighlight> </TextTitle>

            <Scroll horizontal={true} showsHorizontalScrollIndicator={false}>
                <CardCategory image={Tenis} name="Tênis"/>
                <CardCategory image={Eletronicos} name="Eletrônicos"/>
                <CardCategory image={Camiseta} name="Camisetas"/>
                <CardCategory image={Jogos} name="Jogos"/>
                <CardCategory image={Eletrodomesticos} name="Eletrodomésticos"/>
            </Scroll>

        </ContainerCategory>
    )
}
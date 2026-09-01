import {Container, HighlightsSection, Scroll, TextHighlights, TitleHighlights} from "./style";
import {Image, ScrollView, Text} from 'react-native';
import logo from "../../../src/assets/logoShopSwift.png"
import Destaque1 from "../../../src/assets/Destaque1.png"
import Destaque2 from "../../../src/assets/Destaque2.png"
import Destaque3 from "../../../src/assets/Destaque3.png"

export const Home = () => {
    return (
        <Container>

            <Image source={logo}/>

            <HighlightsSection>
                <TitleHighlights>Nossos <TextHighlights>Destaques</TextHighlights></TitleHighlights>
                <Scroll horizontal={true} showsHorizontalScrollIndicator={false}>
                    <Image source={Destaque1}/>
                    <Image source={Destaque2}/>
                    <Image source={Destaque3}/>
                </Scroll>

            </HighlightsSection>



        </Container>
    )
}
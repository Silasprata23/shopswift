import {Image} from "react-native";
import {BoxProducts, ConteinerProducts, TextHighlight, TextTitle} from "./style";
import {CardProducts} from "./CardProducts";
import imageProducts from "../../assets/imageProduct.png";
import {useEffect, useState} from "react";


export const ProductsSection = () => {

    const [produtos, setProdutos] = useState([])

    const buscarDados = async () =>{
        const response = await  fetch("https://fakestoreapi.com/products");
        const data = await response.json()
        setProdutos(data)
    }

    useEffect(() => {
        buscarDados()
    }, []);
  return(
      <BoxProducts>
          <TextTitle>Nossos <TextHighlight>Produtos</TextHighlight></TextTitle>

          <ConteinerProducts>

              {produtos.map((produto) => (
                  <CardProducts
                      key={produto.id}
                      image={produto.image}
                      name={produto.title}
                      price={produto.price}
                  />
              ))}



          </ConteinerProducts>

      </BoxProducts>
  )

}
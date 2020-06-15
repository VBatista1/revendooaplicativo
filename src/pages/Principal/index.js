import React from "react";
import { View } from "react-native";
import { Container, ButtonText } from "../../styles/global";
import { MenuButton, VendasButton, DescriptionText } from "./styles";

export default function Principal({ navigation }) {
  return (
    <Container>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <VendasButton
          onPress={() => {
            navigation.navigate("Vendas");
          }}
        >
          <ButtonText>VENDAS</ButtonText>
          <DescriptionText>
            Registre suas Vendas e Consulte o Histórico de Vendas
          </DescriptionText>
        </VendasButton>
      </View>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <MenuButton>
          <ButtonText>ESTOQUE</ButtonText>
          <DescriptionText>
            Atualize, gerencie e veja a lista de produtos vendidos a serem
            repostos
          </DescriptionText>
        </MenuButton>
        <MenuButton>
          <ButtonText>CLIENTES</ButtonText>
          <DescriptionText>
            Consulte, cadastre e veja dicas sobre clientes
          </DescriptionText>
        </MenuButton>
      </View>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <MenuButton>
          <ButtonText>CATÁLOGOS</ButtonText>
          <DescriptionText>
            Consulte catálogos das principais marcas
          </DescriptionText>
        </MenuButton>
        <MenuButton>
          <ButtonText>RESUMO FINANCEIRO</ButtonText>
          <DescriptionText>
            Acompanhe a evolução das suas receitas e despesas
          </DescriptionText>
        </MenuButton>
      </View>
    </Container>
  );
}

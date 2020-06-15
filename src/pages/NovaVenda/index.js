import React from "react";
import { Text, View } from "react-native";
import {
  Container,
  BlueButton,
  ButtonText,
  Title,
  Steps,
} from "../../styles/global";

export default function NovaVenda({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <Steps>
        <Text>Passo 1 de 5 - Adicionar produtos ao Carrinho</Text>
      </Steps>
      <Container>
        <Title>Você não possui estoque cadastrado. O que deseja fazer?</Title>
        <BlueButton>
          <ButtonText>INSERIR A PARTIR DE UM CATÁLOGO</ButtonText>
        </BlueButton>
        <BlueButton>
          <ButtonText onPress={() => navigation.navigate("ProdutoManualmente")}>
            INSERIR PRODUTO MANUALMENTE
          </ButtonText>
        </BlueButton>
      </Container>
    </View>
  );
}

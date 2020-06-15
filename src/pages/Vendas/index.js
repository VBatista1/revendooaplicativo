import React from "react";
import { Container, BlueButton, ButtonText, Title } from "../../styles/global";

export default function Vendas({ navigation }) {
  return (
    <Container>
      <Title>O que você deseja fazer?</Title>
      <BlueButton>
        <ButtonText onPress={() => navigation.navigate("NovaVenda")}>
          REGISTRAR UMA VENDA
        </ButtonText>
      </BlueButton>
      <BlueButton>
        <ButtonText>CONSULTAR HISTÓRICO DE VENDAS</ButtonText>
      </BlueButton>
    </Container>
  );
}

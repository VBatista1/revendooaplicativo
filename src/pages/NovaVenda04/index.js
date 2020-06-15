import React, { useState } from "react";
import { Text, TouchableOpacity, Alert } from "react-native";
import {
  ProductTitle,
  ActionButton,
  ActionButtonText,
  RemoveButton,
  RemoveButtonText,
  Txt,
  ProductView,
  Divider,
  TxtRow,
  RemoveColumn,
  LoginButton,
} from "./styles";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  Container,
  BlueButton,
  ButtonText,
  Steps,
  Title,
  TxtInput,
} from "../../styles/global";
import axios from "axios";

export default function NovaVenda04({ navigation }) {
  const unitPrice = 30;
  const [quantity, setQuantity] = useState(1);
  const [nome, setNome] = useState("");
  const [tel, setTel] = useState("");

  function save() {
    axios
      .post("https://dry-crag-51345.herokuapp.com/create-cliente/1", {
        name: nome,
        telefone: tel,
      })
      .then(function (response) {
        Alert.alert(
          "Venda efetuada com sucesso",
          "",
          [{ text: "OK", onPress: () => navigation.navigate("Principal") }],
          {
            cancelable: false,
          }
        );
      })
      .catch((error) => {
        Alert.alert("Cliente com erro", "", [{ text: "OK" }], {
          cancelable: false,
        });
      });
  }

  return (
    <>
      <Steps>
        <Text>Passo 4 de 5 - Informe o cliente desta venda</Text>
      </Steps>
      <Container>
        <Title>Cadastre um novo cliente:</Title>
        <TxtInput onChangeText={(text) => setNome(text)} placeholder="Nome" />
        <TxtInput
          onChangeText={(text) => setTel(text)}
          placeholder="Telefone"
        />
        <LoginButton onPress={save}>
          <ButtonText>SALVAR CLIENTE E CONTINUAR</ButtonText>
        </LoginButton>
        <Title>OU</Title>
        <BlueButton>
          <ButtonText>LISTA DE CLIENTES</ButtonText>
        </BlueButton>
      </Container>
    </>
  );
}

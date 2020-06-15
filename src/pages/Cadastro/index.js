import React, { useState } from "react";
import { Text, Alert } from "react-native";
import {
  TxtInput,
  Container,
  BlueButton,
  ButtonText,
} from "../../styles/global";
import { SwitchCadastro, ViewSwitch } from "./styles";
import axios from "axios";

export default function Cadastro({ navigation }) {
  const [switchState, setSwitchState] = useState(false);
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function save() {
    axios
      .post("https://dry-crag-51345.herokuapp.com/create-user", {
        email: email,
        senha: senha,
        telefone: tel,
        name: nome,
      })
      .then(function (response) {
        // Alert.alert(
        //   "Produto criado com sucesso",
        //   "",
        //   [{ text: "OK", onPress: () => navigation.navigate("NovaVenda02") }],
        //   { cancelable: false }
        // );
        navigation.navigate("Login");
      })
      .catch((error) => {
        Alert.alert("Produto com erro", "", [{ text: "OK" }], {
          cancelable: false,
        });
      });
  }

  return (
    <Container>
      <TxtInput
        onChangeText={(text) => setNome(text)}
        placeholder="Nome Completo"
      />
      <TxtInput onChangeText={(text) => setCpf(text)} placeholder="CPF" />
      <TxtInput onChangeText={(text) => setTel(text)} placeholder="Telefone" />
      <TxtInput onChangeText={(text) => setEmail(text)} placeholder="E-mail" />
      <TxtInput placeholder="Confime e-mail" />
      <TxtInput onChangeText={(text) => setSenha(text)} placeholder="Senha" />
      <Text>
        Crie uma senha com no mínimo 4 caracteres, ela será solicitada sempre
        que acessar seu APP.
      </Text>
      <TxtInput placeholder="Confirme senha" />
      <ViewSwitch>
        <SwitchCadastro
          onValueChange={() => setSwitchState(!switchState)}
          value={switchState}
        />
        <Text>Li e aceito os Termos de Uso</Text>
      </ViewSwitch>
      <BlueButton onPress={save}>
        <ButtonText>CRIE SUA CONTA</ButtonText>
      </BlueButton>
    </Container>
  );
}

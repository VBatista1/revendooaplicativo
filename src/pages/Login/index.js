import React, { useState } from "react";
import { Image, Alert } from "react-native";
import { LoginButton, LoginLogo } from "./styles";
import {
  TxtInput,
  Container,
  BlueButton,
  ButtonText,
} from "../../styles/global";
import axios from "axios";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function save() {
    axios
      .post("https://dry-crag-51345.herokuapp.com/login", {
        email: email,
        senha: senha,
      })
      .then(function (response) {
        navigation.navigate("Principal");
      })
      .catch((error) => {
        Alert.alert("Senha ou Email incorreto", "", [{ text: "OK" }], {
          cancelable: false,
        });
      });
  }
  return (
    <Container>
      <LoginLogo>
        <Image
          style={{ width: 252, height: 74.4 }}
          source={require("../../../assets/RevendooLogo.jpg")}
        />
      </LoginLogo>
      <TxtInput onChangeText={(text) => setEmail(text)} placeholder="E-mail" />
      <TxtInput onChangeText={(text) => setSenha(text)} placeholder="Senha" />
      <LoginButton onPress={save}>
        <ButtonText>ENTRAR</ButtonText>
      </LoginButton>
      <BlueButton onPress={() => navigation.navigate("Cadastro")}>
        <ButtonText>CADASTRAR COM E-MAIL</ButtonText>
      </BlueButton>
    </Container>
  );
}

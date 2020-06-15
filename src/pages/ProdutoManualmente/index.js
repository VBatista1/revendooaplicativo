import React, { useState } from "react";
import { Text, TouchableOpacity, Alert } from "react-native";
import {
  TxtInput,
  Container,
  BlueButton,
  ButtonText,
} from "../../styles/global";
import { ProductQtyBox, AddQty, ProductRow } from "./styles";
import Icon from "react-native-vector-icons/MaterialIcons";
import axios from "axios";

export default function ProdutoManualmente({ navigation }) {
  const [quantity, setQuantity] = useState(1);
  const [nomeProduto, setNomeProduto] = useState("");
  const [marca, setMarca] = useState("");
  const [descricao, setDescricao] = useState("");
  const [precoCusto, setPrecoCusto] = useState("");
  const [precoVenda, setPrecoVenda] = useState("");
  const [validade, setValidade] = useState("");

  function save() {
    axios
      .post("https://dry-crag-51345.herokuapp.com/create-produto/1", {
        name: nomeProduto,
        marca: marca,
        descricao: descricao,
        venda: precoVenda,
        custo: precoCusto,
        estoque: quantity,
        validade: validade,
      })
      .then(function (response) {
        Alert.alert(
          "Produto criado com sucesso",
          "",
          [
            {
              text: "OK",
              onPress: () =>
                navigation.navigate("NovaVenda02", {
                  name: nomeProduto,
                  venda: precoVenda,
                }),
            },
          ],
          { cancelable: false }
        );
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
        onChangeText={(text) => setNomeProduto(text)}
        placeholder="Nome do Produto"
      />
      <TxtInput
        onChangeText={(text) => setMarca(text)}
        placeholder="Marca / Catálogo"
      />
      <TxtInput
        onChangeText={(text) => setDescricao(text)}
        placeholder="Descrição do Produto"
      />
      <ProductRow>
        <TxtInput
          onChangeText={(text) => setPrecoCusto(text)}
          placeholder="Preço do custo"
        />
        <TxtInput
          onChangeText={(text) => setPrecoVenda(text)}
          placeholder="Preço de Venda"
        />
      </ProductRow>
      <ProductRow>
        <ProductQtyBox>
          <Text style={{ color: "#999", fontSize: 11, paddingLeft: 80 }}>
            Quantidade
          </Text>
          <AddQty>
            <TouchableOpacity
              onPress={() => (quantity > 1 ? setQuantity(quantity - 1) : null)}
            >
              <Icon name="remove-circle" size={20} color="#999" />
            </TouchableOpacity>
            <Text style={{ fontSize: 17 }}>{quantity}</Text>
            <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
              <Icon name="add-circle" size={20} color="#999" />
            </TouchableOpacity>
          </AddQty>
        </ProductQtyBox>
        <TxtInput
          onChangeText={(text) => setValidade(text)}
          placeholder="Validade"
        />
      </ProductRow>
      <BlueButton onPress={save}>
        <ButtonText>SALVAR</ButtonText>
      </BlueButton>
    </Container>
  );
}

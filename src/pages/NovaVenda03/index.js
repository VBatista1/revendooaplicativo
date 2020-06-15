import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
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
} from "./styles";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  Container,
  BlueButton,
  ButtonText,
  Steps,
  Title,
} from "../../styles/global";

export default function NovaVenda03({ navigation }) {
  const unitPrice = 30;
  const [quantity, setQuantity] = useState(1);
  return (
    <>
      <Steps>
        <Text>Passo 3 de 5 - Entrega de Pagamento</Text>
      </Steps>
      <Container>
        <Title>Data de entrega:</Title>
        <BlueButton>
          <ButtonText onPress={() => navigation.navigate("NovaVenda03Data")}>
            ENTREGUE HOJE
          </ButtonText>
        </BlueButton>
        <BlueButton>
          <ButtonText>DEFINIR DATA DA ENTREGA</ButtonText>
        </BlueButton>
      </Container>
    </>
  );
}

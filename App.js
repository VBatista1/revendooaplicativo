import React from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import login from "./src/pages/Login/index";
import cadastro from "./src/pages/Cadastro/index";
import principal from "./src/pages/Principal/index";
import PrincipalHeader from "./src/components/PrincipalHeader";
import vendas from "./src/pages/Vendas/index";
import novavenda from "./src/pages/NovaVenda/index";
import produtomanualmente from "./src/pages/ProdutoManualmente/index";
import novavenda02 from "./src/pages/NovaVenda02/index";
import novavenda03 from "./src/pages/NovaVenda03/index";
import novavenda03data from "./src/pages/NovaVenda03Data/index";
import novavenda04 from "./src/pages/NovaVenda04/index";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cadastro"
          component={cadastro}
          options={{
            title: "CRIE SUA CONTA",
            headerStyle: {
              backgroundColor:
                "linear-gradient(180deg, rgba(156,40,177,1) 0%, rgba(103,57,182,1) 100%)",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            // headerRight: () => (
            //   <Image source={require('../../../assets/RevendooLogoIcon.jpg')} />
            // ),
          }}
        />
        <Stack.Screen
          name="Principal"
          component={principal}
          options={{
            headerTitle: () => <PrincipalHeader />,
            headerStyle: {
              backgroundColor:
                "linear-gradient(180deg, rgba(156,40,177,1) 0%, rgba(103,57,182,1) 100%)",
            },
            headerTintColor: "#fff",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Vendas"
          component={vendas}
          options={{
            title: "VENDA",
            headerStyle: {
              backgroundColor:
                "linear-gradient(180deg, rgba(156,40,177,1) 0%, rgba(103,57,182,1) 100%)",
            },
            headerTintColor: "#fff",
            headerTitleAlign: "left",
          }}
        />
        <Stack.Screen
          name="NovaVenda"
          component={novavenda}
          options={{
            title: "NOVA VENDA",
            headerStyle: {
              backgroundColor:
                "linear-gradient(180deg, rgba(156,40,177,1) 0%, rgba(103,57,182,1) 100%)",
            },
            headerTintColor: "#fff",
            headerTitleAlign: "left",
          }}
        />
        <Stack.Screen
          name="ProdutoManualmente"
          component={produtomanualmente}
          options={{
            title: "NOVO PRODUTO",
            headerStyle: {
              backgroundColor:
                "linear-gradient(180deg, rgba(156,40,177,1) 0%, rgba(103,57,182,1) 100%)",
            },
            headerTintColor: "#fff",
            headerTitleAlign: "left",
          }}
        />
        <Stack.Screen
          name="NovaVenda02"
          component={novavenda02}
          options={{
            title: "NOVA VENDA",
            headerStyle: {
              backgroundColor:
                "linear-gradient(180deg, rgba(156,40,177,1) 0%, rgba(103,57,182,1) 100%)",
            },
            headerTintColor: "#fff",
            headerTitleAlign: "left",
          }}
        />
        <Stack.Screen
          name="NovaVenda03"
          component={novavenda03}
          options={{
            title: "NOVA VENDA",
            headerStyle: {
              backgroundColor:
                "linear-gradient(180deg, rgba(156,40,177,1) 0%, rgba(103,57,182,1) 100%)",
            },
            headerTintColor: "#fff",
            headerTitleAlign: "left",
          }}
        />
        <Stack.Screen
          name="NovaVenda03Data"
          component={novavenda03data}
          options={{
            title: "NOVA VENDA",
            headerStyle: {
              backgroundColor:
                "linear-gradient(180deg, rgba(156,40,177,1) 0%, rgba(103,57,182,1) 100%)",
            },
            headerTintColor: "#fff",
            headerTitleAlign: "left",
          }}
        />
        <Stack.Screen
          name="NovaVenda04"
          component={novavenda04}
          options={{
            title: "NOVA VENDA",
            headerStyle: {
              backgroundColor:
                "linear-gradient(180deg, rgba(156,40,177,1) 0%, rgba(103,57,182,1) 100%)",
            },
            headerTintColor: "#fff",
            headerTitleAlign: "left",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

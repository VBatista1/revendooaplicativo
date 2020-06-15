import styled from "styled-components/native";

export const ProductImage = styled.Image`
  width: 90px;
  height: 90px;
`;

export const ProductPrice = styled.Text`
  font-size: 15px;
  color: ${(props) => props.color};
`;
export const ProductQtyBox = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f5f5f5;
  border-bottom-width: 1px;
  border-bottom-color: #999;
  width: 150px;
  height: 50px;
`;
export const AddQty = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
export const ProductTitle = styled.Text`
  margin: 10px 0px;
  color: #999;
`;
export const TxtValue = styled.Text``;

export const ActionButton = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 12px 0px;
`;
export const ActionButtonText = styled.Text`
  font-weight: 400;
  color: #1564c0;
  font-size: 22px;
`;
export const RemoveButton = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const RemoveButtonText = styled.Text`
  font-weight: bold;
  color: #1564c0;
`;

export const Txt = styled.Text`
  font-size: 22px;
  font-weight: ${(props) => (props.bold ? "400" : "normal")};
  color: ${(props) => props.color};
`;

export const ProductView = styled.View`
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: space-between;
  margin: 15px 0px;
`;

export const Divider = styled.View`
  border-bottom-color: #d3d3d3;
  border-bottom-width: 1px;
`;

export const ProductDetails = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ProductColumn = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const RemoveColumn = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

export const TxtRow = styled.View`
  margin: 5px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
export const LoginButton = styled.TouchableOpacity`
  height: 40px;
  margin: 20px 0;
	padding: 12px;
	border-radius: 5px;
  background-color: #e0e0e0;
`;

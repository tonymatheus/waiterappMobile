import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const ProductContainer = styled.TouchableOpacity`
  flex-direction: row;
  margin: 10px 5px;
  padding: 5px;
  align-items: center;
`;

export const Image = styled.Image`
  width: 120px;
  height: 95px;
  border-radius: 8px;
`;
export const ProductDetails = styled.View`
  flex: 1;
  margin-left: 16px;
`;

export const Separator = styled.View`
  width: 100%;
  flex: 1;
  background: rgba(204, 204, 204, 0.3);
  margin: 24px 0;
`;

export const AddToCartButton = styled.TouchableOpacity`
  position: relative;
  right: 0;
  left: 0;
`;

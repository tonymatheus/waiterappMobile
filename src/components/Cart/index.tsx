import React from 'react';
import { FlatList } from 'react-native';
import { Item, ProductContainer, Actions, Image } from './styles';
import { Text } from '../Text';
import { CartItem } from '../../types/CartItem';

interface CartProps {
  cartItems: CartItem[];
}
export const Cart = ({ cartItems }: CartProps) => {
  return (
    <FlatList
      data={cartItems}
      keyExtractor={(cartItem) => cartItem.product._id}
      showsVerticalScrollIndicator={false}
      renderItem={({ item: cartItem }) => (
        <Item>
          <ProductContainer>
            <Image
              source={{
                uri: `http://192.168.1.101:3001/uploads/${cartItem.product.imagePath}`,
              }}
            />
          </ProductContainer>
          <Actions>
            <Text>{cartItem.product.name}</Text>
          </Actions>
        </Item>
      )}
    />
  );
};

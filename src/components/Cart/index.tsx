import React, { useState } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import {
  Item,
  ProductContainer,
  Actions,
  Image,
  QuantityContainer,
  ProductDetails,
  Summary,
  TotalContainer,
} from './styles';
import { Text } from '../Text';
import { CartItem } from '../../types/CartItem';
import { formatCurrency } from '../../utils/formatCurrency';
import { PlusCircle } from '../Icons/PlusCircle';
import { MinusCircle } from '../Icons/MinusCircle';
import { Button } from '../Button';
import { Product } from '../../types/product';
import { OrderConfirmedModal } from '../OrderConfirmedModal';
import { api } from '../../utils/api';

interface CartProps {
  cartItems: CartItem[];
  onAdd: (product: Product) => void;
  onDecrement: (Product: Product) => void;
  onConfirmOrder: () => void;
  selectedTable: string;
}
export const Cart = ({
  cartItems,
  onAdd,
  onDecrement,
  onConfirmOrder,
  selectedTable,
}: CartProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const desableCartItemButton = cartItems.length === 0;

  const total = cartItems.reduce((accumulator, carItem) => {
    return accumulator + carItem.quantity * carItem.product.price;
  }, 0);

  const handleConfirmOrder = async () => {
    setIsLoading(true);
    const payload = {
      table: selectedTable,
      products: cartItems.map((cartItem) => ({
        product: cartItem.product,
        quantity: cartItem.quantity,
      })),
    };
    await api.post('/orders', payload);
    setIsLoading(false);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    onConfirmOrder();
    setIsModalVisible(false);
  };

  return (
    <>
      <OrderConfirmedModal onOk={handleOk} visible={isModalVisible} />
      {cartItems.length > 0 && (
        <FlatList
          style={{ marginBottom: 20, maxHeight: 150 }}
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
                <QuantityContainer>
                  <Text size={14} color="#666">
                    {cartItem.quantity}x
                  </Text>
                </QuantityContainer>
              </ProductContainer>
              <ProductDetails>
                <Text weight="600" size={14}>
                  {cartItem.product.name}
                </Text>
                <Text size={14} color="#666" style={{ marginTop: 4 }}>
                  {formatCurrency(cartItem.product.price)}
                </Text>
              </ProductDetails>
              <Actions>
                <TouchableOpacity
                  style={{ marginRight: 25 }}
                  onPress={() => onAdd(cartItem.product)}
                >
                  <PlusCircle />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => onDecrement(cartItem?.product)}
                >
                  <MinusCircle />
                </TouchableOpacity>
              </Actions>
            </Item>
          )}
        />
      )}
      <Summary>
        <TotalContainer>
          {cartItems.length > 0 ? (
            <>
              <Text>Total</Text>
              <Text color="#666" size={20} weight="600">
                {formatCurrency(total)}
              </Text>
            </>
          ) : (
            <Text color="#999">Seu carrinho está vazio</Text>
          )}
        </TotalContainer>
        <View>
          <Button
            disabled={desableCartItemButton}
            onPress={handleConfirmOrder}
            loading={isLoading}
          >
            confirmar pedido
          </Button>
        </View>
      </Summary>
    </>
  );
};

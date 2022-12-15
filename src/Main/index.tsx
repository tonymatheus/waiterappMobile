import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Text } from '../components/Text';
import { ActivityIndicator, FlatList, View } from 'react-native';

import { categories } from '../mocks/categories';

import {
  CategoriesContainer,
  Container,
  Footer,
  FooterContainer,
  CenteredContainer,
  MenuContainer,
} from './styles';
import { Categories } from '../components/Categories';
import { Menu } from '../components/Menu';
import { Button } from '../components/Button';
import { TableModal } from '../components/TableModal';
import { Cart } from '../components/Cart';
import { CartItem } from '../types/CartItem';
import { Product } from '../types/product';
import { products as mockProducts } from '../mocks/products';
import { Empty } from '../components/Icons/Empty';

export const Main = () => {
  const [isTableModalVisible, setIsTableModalVisible] = useState(false);
  const [selectedTable, setSelectedTable] = useState('');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [products] = useState<Product[]>(mockProducts);

  const handleAddToCart = (product: Product) => {
    if (!selectedTable) {
      setIsTableModalVisible(true);
    }

    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(
        (cartItem) => cartItem.product._id === product._id
      );
      if (itemIndex < 0) {
        return prevState.concat({
          quantity: 1,
          product,
        });
      }
      const newCartItems = [...prevState];
      const item = newCartItems[itemIndex];

      newCartItems[itemIndex] = {
        ...item,
        quantity: newCartItems[itemIndex].quantity + 1,
      };
      return newCartItems;
    });
  };

  const handleResetOrder = () => {
    setSelectedTable('');
    setCartItems([]);
  };

  const handleDecrementItem = (product: Product) => {
    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(
        (cartItem) => cartItem.product._id === product._id
      );
      const item = prevState[itemIndex];
      const newCartItems = [...prevState];

      if (item.quantity === 1) {
        newCartItems.splice(itemIndex, 1);

        return newCartItems;
      }
      newCartItems[itemIndex] = {
        ...item,
        quantity: item.quantity - 1,
      };

      return newCartItems;
    });
  };

  const handleSaveTable = (table: string) => {
    setSelectedTable(table);
  };

  return (
    <>
      <Container>
        <Header
          selectedTable={selectedTable}
          onCancelOrder={handleResetOrder}
        />

        {isLoading && (
          <CenteredContainer>
            <ActivityIndicator color="#d73035" size="large" />
          </CenteredContainer>
        )}

        {!isLoading && (
          <>
            <CategoriesContainer>
              <Categories />
            </CategoriesContainer>
            {products.length > 0 ? (
              <MenuContainer>
                <Menu onAddToCart={handleAddToCart} products={products} />
              </MenuContainer>
            ) : (
              <CenteredContainer>
                <Empty />
                <Text color="#666" style={{ marginTop: 24 }}>
                  Nehum produto foi encontrado
                </Text>
              </CenteredContainer>
            )}
          </>
        )}
      </Container>

      <Footer>
        {!selectedTable && (
          <Button
            onPress={() => setIsTableModalVisible(true)}
            disabled={isLoading}
          >
            Novo Pedido
          </Button>
        )}

        {selectedTable && (
          <Cart
            cartItems={cartItems}
            onAdd={handleAddToCart}
            onDecrement={handleDecrementItem}
            onConfirmOrder={handleResetOrder}
          />
        )}
      </Footer>
      <TableModal
        visible={isTableModalVisible}
        onClose={() => setIsTableModalVisible(false)}
        onSave={handleSaveTable}
      />
    </>
  );
};

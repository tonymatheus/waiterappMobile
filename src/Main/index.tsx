import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Text } from '../components/Text';
import { FlatList } from 'react-native';

import { categories } from '../mocks/categories';

import {
  CategoriesContainer,
  Container,
  Footer,
  FooterContainer,
  MenuContainer,
} from './styles';
import { Categories } from '../components/Categories';
import { Menu } from '../components/Menu';
import { Button } from '../components/Button';
import { TableModal } from '../components/TableModal';

export const Main = () => {
  const [isTableModalVisible, setIsTableModalVisible] = useState(false);
  const [selectedTable, setSelectedTable] = useState('');

  const handleSaveTable = (table: string) => {
    setSelectedTable(table);
  };

  return (
    <>
      <Container>
        <Header />
        <CategoriesContainer>
          <Categories />
        </CategoriesContainer>
        <MenuContainer>
          <Menu />
        </MenuContainer>
      </Container>

      <Footer>
        {!selectedTable && (
          <Button onPress={() => setIsTableModalVisible(true)}>
            Novo Pedido
          </Button>
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
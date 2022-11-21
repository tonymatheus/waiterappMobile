import React from 'react';
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

export const Main = () => {
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
        <Button  onPress={() => alert('test')}>Novo Pedido</Button>
      </Footer>
    </>
  );
};

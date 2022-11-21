import React from 'react';
import { Text } from '../Text';
import { Container } from './styles';

export const Header = () => {
  return (
    <Container>
      <Text size={14} opacity={0.9}>
        Bem Vindo(a) Ao
      </Text>
      <Text size={24} weight="700">
        Waiter
        <Text>App</Text>
      </Text>
    </Container>
  );
};

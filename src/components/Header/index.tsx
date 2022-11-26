import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from '../Text';
import { Container, OrderContent, OrderHeader, Table } from './styles';

interface HeaderProps {
  selectedTable: string;
  onCancelOrder: () => void;
}

export const Header = ({ selectedTable, onCancelOrder }: HeaderProps) => {
  return (
    <Container>
      {!selectedTable && (
        <>
          <Text size={14} opacity={0.9}>
            Bem Vindo(a) Ao
          </Text>
          <Text size={24} weight="700">
            Waiter
            <Text>App</Text>
          </Text>
        </>
      )}
      {selectedTable && (
        <OrderContent>
          <OrderHeader>
            <Text size={24} weight="600">
              Pedido
            </Text>
            <TouchableOpacity onPress={onCancelOrder}>
              <Text size={14} weight="600" color="#d73035">
                Cancelar Pedido
              </Text>
            </TouchableOpacity>
          </OrderHeader>
          <Table>
            <Text size={16} color="#666" weight="400">
              Mesa {selectedTable}
            </Text>
          </Table>
        </OrderContent>
      )}
    </Container>
  );
};

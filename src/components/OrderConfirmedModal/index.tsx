import React from 'react';
import { Container, OkButton } from './styles';
import { Modal } from 'react-native';
import { Text } from '../Text';
import { CheckCircle } from '../Icons/CheckCircle';
import { StatusBar } from 'expo-status-bar';

interface OnConfirmedModal {
  visible: boolean;
  onOk: () => void;
}
export const OrderConfirmedModal = ({ visible, onOk }: OnConfirmedModal) => {
  return (
    <Modal animationType="fade" visible={visible}>
      <StatusBar style="light" />
      <Container>
        <CheckCircle />
        <Text style={{ marginTop: 12 }} weight="600" size={20} color="#fff">
          Pedido confirmado
        </Text>
        <Text color="#fff" opacity={0.9} style={{ marginTop: 4 }}>
          O pedido já entrou na fila de produção
        </Text>
        <OkButton onPress={onOk}>
          <Text color="#d73035" weight="600">
            Ok
          </Text>
        </OkButton>
      </Container>
    </Modal>
  );
};

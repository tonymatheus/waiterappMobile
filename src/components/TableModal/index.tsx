import React, { useState } from 'react';
import { Modal, TouchableOpacity, Platform } from 'react-native';
import { Button } from '../Button';
import { Close } from '../Icons/Close';
import { Text } from '../Text';
import { Container, Form, Header, Input, ModalBody, Overlay } from './styles';

interface TableModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (table: string) => void;
}

export const TableModal = ({ visible, onClose, onSave }: TableModalProps) => {
  const isAndroid = Platform.OS === 'android';
  const [table, setTable] = useState('');

  const handleSave = () => {
    onSave(table);
    onClose();
  };

  return (
    <Modal transparent visible={visible} animationType="fade">
      <Overlay behavior={isAndroid ? 'height' : 'padding'}>
        <ModalBody>
          <Header>
            <Text weight="600">Informe a mesa </Text>
            <TouchableOpacity onPress={onClose}>
              <Close color="#666" />
            </TouchableOpacity>
          </Header>
          <Form>
            <Input
              placeholder="número da mesa"
              placeholderTextColor={'#666'}
              keyboardType="number-pad"
              value={table}
              onChangeText={setTable}
            />
            <Button onPress={handleSave} disabled={table.length === 0}>
              salvar
            </Button>
          </Form>
        </ModalBody>
      </Overlay>
    </Modal>
  );
};

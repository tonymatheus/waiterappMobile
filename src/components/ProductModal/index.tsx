import React from 'react';
import { FlatList, Modal } from 'react-native';
import { Product } from '../../types/product';
import { Close } from '../Icons/Close';
import { Text } from '../Text';
import {
  CloseButton,
  Header,
  Image,
  IngredientsContainer,
  ModalBody,
  Ingredient
} from './styles';

interface ProductModalProps {
  visible: boolean;
  onClose: () => void;
  product: null | Product;
}

export const ProductModal = ({
  visible,
  onClose,
  product,
}: ProductModalProps) => {
  console.log(product);
  if (!product) {
    return null;
  }
  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <Image
        source={{
          uri: `http://192.168.1.101:3001/uploads/${product.imagePath}`,
        }}
      >
        <CloseButton onPress={onClose}>
          <Close />
        </CloseButton>
      </Image>
      <ModalBody>
        <Header>
          <Text size={24} weight="600">
            {product.name}
          </Text>
          <Text color="#666" style={{ marginTop: 8 }}>
            {product.description}
          </Text>
        </Header>
        <IngredientsContainer>
          <Text color="#666" weight="600">
            Ingredientes
          </Text>
          <FlatList
            data={product.ingredients}
            keyExtractor={(ingredients) => ingredients._id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item: ingredient }) => (
              <Ingredient>
                <Text>{ingredient.icon}</Text>
                <Text size={14} color="#666">
                  {ingredient.name}
                </Text>
              </Ingredient>
            )}
          />
        </IngredientsContainer>
      </ModalBody>
    </Modal>
  );
};

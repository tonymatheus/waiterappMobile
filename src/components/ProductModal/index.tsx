import React from 'react';
import { FlatList, Modal } from 'react-native';
import { Product } from '../../types/product';
import { formatCurrency } from '../../utils/formatCurrency';
import { Button } from '../Button';
import { Close } from '../Icons/Close';
import { Text } from '../Text';
import {
  CloseButton,
  Header,
  Image,
  IngredientsContainer,
  ModalBody,
  Ingredient,
  FooterContainer,
  Footer,
  PriceContainer,
  ButtonContainer,
} from './styles';

interface ProductModalProps {
  visible: boolean;
  onClose: () => void;
  product: null | Product;
  onAddToCart: (product: Product) => void;
}

export const ProductModal = ({
  visible,
  onClose,
  product,
  onAddToCart,
}: ProductModalProps) => {
  if (!product) {
    return null;
  }

  const handleAddToCart = () => {
    onAddToCart(product!);
    onClose();
  };

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
        {product.ingredients.length > 0 && (
          <IngredientsContainer>
            <Text color="#666" weight="600">
              Ingredientes
            </Text>
            <FlatList
              data={product.ingredients}
              keyExtractor={(ingredients) => ingredients._id}
              showsVerticalScrollIndicator={false}
              style={{ marginTop: 16 }}
              renderItem={({ item: ingredient }) => (
                <Ingredient>
                  <Text style={{ marginRight: 13 }}>{ingredient.icon}</Text>
                  <Text size={14} color="#666">
                    {ingredient.name}
                  </Text>
                </Ingredient>
              )}
            />
          </IngredientsContainer>
        )}
      </ModalBody>
      <Footer>
        <FooterContainer>
          <PriceContainer>
            <Text color="#666">Preço</Text>
            <Text weight="600" size={20}>
              {formatCurrency(product.price)}
            </Text>
          </PriceContainer>
          <ButtonContainer>
            <Button onPress={handleAddToCart}>adicinar pedido</Button>
          </ButtonContainer>
        </FooterContainer>
      </Footer>
    </Modal>
  );
};

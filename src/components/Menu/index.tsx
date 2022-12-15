import React, { useState } from 'react';
import { Separator } from './styles';
import { FlatList } from 'react-native';

import { Text } from '../Text';
import {
  ProductContainer,
  Image,
  ProductDetails,
  AddToCartButton,
} from './styles';
import { formatCurrency } from '../../utils/formatCurrency';
import { PlusCircle } from '../Icons/PlusCircle';
import { ProductModal } from '../ProductModal';
import { Product } from '../../types/product';

interface MenuProps {
  onAddToCart: (product: Product) => void;
  products: Product[];
}
export const Menu = ({ onAddToCart, products }: MenuProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<null | Product>(null);

  const onClose = () => {
    setIsModalVisible(false);
  };

  const handleOpenModal = (product: Product) => {
    setIsModalVisible(true);
    setSelectedProduct(product);
  };

  return (
    <>
      <ProductModal
        onAddToCart={onAddToCart}
        visible={isModalVisible}
        onClose={onClose}
        product={selectedProduct}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={Separator}
        data={products}
        keyExtractor={(product) => product._id}
        renderItem={({ item: product }) => (
          <ProductContainer onPress={() => handleOpenModal(product)}>
            <Image
              source={{
                uri: `http://192.168.1.101:3001/uploads/${product.imagePath}`,
              }}
            />
            <ProductDetails>
              <Text weight="600">{product.name}</Text>
              <Text size={14} color={'#666'} style={{ marginVertical: 8 }}>
                {product.description}
              </Text>
              <Text size={14} weight="600">
                {formatCurrency(product.price)}
              </Text>
            </ProductDetails>
            <AddToCartButton onPress={() => onAddToCart(product)}>
              <PlusCircle />
            </AddToCartButton>
          </ProductContainer>
        )}
      />
    </>
  );
};

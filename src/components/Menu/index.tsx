import React from 'react';
import { Container, Separator } from './styles';
import { FlatList, TouchableOpacity } from 'react-native';
import { products } from '../../mocks/products';
import { Text } from '../Text';
import { Product, Image, ProductDetails, AddToCartButton } from './styles';
import { formatCurrency } from '../../utils/formatCurrency';
import { PlusCircle } from '../Icons/PlusCircle';
export const Menu = () => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={Separator}
      data={products}
      keyExtractor={(product) => product._id}
      renderItem={({ item: product }) => (
        <Product>
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
          <AddToCartButton>
            <PlusCircle />
          </AddToCartButton>
        </Product>
      )}
    />
  );
};

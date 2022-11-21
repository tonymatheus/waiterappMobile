import React, { useState } from 'react';
import { Category, Container, Icon } from './styles';
import { FlatList } from 'react-native';
import { categories } from '../../mocks/categories';
import { Text } from '../Text';

export const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSelectCategory = (categoryId: string) => {
    const category = selectedCategory === categoryId ? '' : categoryId;
    setSelectedCategory(category);
  };

  return (
    <Container>
      <FlatList
        contentContainerStyle={{
          padding: 24,
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={categories}
        keyExtractor={(category) => category._id}
        renderItem={({ item: category }) => {
          const isSelected = selectedCategory === category._id;

          return (
            <Category onPress={() => handleSelectCategory(category._id)}>
              <Icon>
                <Text opacity={isSelected ? 1 : 0.5}>{category.icon}</Text>
              </Icon>
              <Text size={14} weight="600" opacity={isSelected ? 1 : 0.5}>
                {category.name}
              </Text>
            </Category>
          );
        }}
      />
    </Container>
  );
};

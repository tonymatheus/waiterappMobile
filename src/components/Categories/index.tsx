import React, { useState } from 'react';
import { CategoryContainer, Container, Icon } from './styles';
import { FlatList } from 'react-native';
import { Text } from '../Text';
import { Category } from '../../types/Category';

interface CategoriesProps {
  categories: Category[];
  onSelectCategory: (catoryID: string) => Promise<void>;
}
export const Categories = ({
  categories,
  onSelectCategory,
}: CategoriesProps) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSelectCategory = (categoryId: string) => {
    const category = selectedCategory === categoryId ? '' : categoryId;
    onSelectCategory(category);
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
            <CategoryContainer
              onPress={() => handleSelectCategory(category._id)}
            >
              <Icon>
                <Text opacity={isSelected ? 1 : 0.5}>{category.icon}</Text>
              </Icon>
              <Text size={14} weight="600" opacity={isSelected ? 1 : 0.5}>
                {category.name}
              </Text>
            </CategoryContainer>
          );
        }}
      />
    </Container>
  );
};

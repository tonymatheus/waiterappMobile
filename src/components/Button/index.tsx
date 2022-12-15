import React from 'react';
import { Container } from './styles';
import { Text } from '../Text';
import { ActivityIndicator } from 'react-native';

interface Props {
  children: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
}

export const Button = ({
  children,
  onPress,
  disabled,
  loading,
  ...rest
}: Props) => {
  return (
    <Container {...rest} onPress={onPress} disabled={disabled || loading}>
      {!loading && (
        <Text weight="600" color="#fff">
          {children}
        </Text>
      )}
      {loading && <ActivityIndicator size={20} color="#fff" />}
    </Container>
  );
};

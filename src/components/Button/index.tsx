import React from 'react';
import { Container } from './styles';
import { Text } from '../Text';

interface Props {
  children: string;
  onPress: () => void;
  disabled?: boolean;
}

export const Button = ({ children, onPress, disabled, ...rest }: Props) => {
  return (
    <Container {...rest} onPress={onPress} disabled={disabled}>
      <Text weight="600" color="#fff">
        {children}
      </Text>
    </Container>
  );
};

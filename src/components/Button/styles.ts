import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background: ${({ disabled }) => (disabled ? '#999' : '#d73035')}
  align-items: center;
  justify-content: center;
  border-radius: 48px;
  width: 100%;
  padding: 14px 24px;
`;

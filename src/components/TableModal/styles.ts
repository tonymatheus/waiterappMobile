import styled from 'styled-components/native';

export const Container = styled.View``;

export const Overlay = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);
  padding: 0 24px;
`;

export const ModalBody = styled.View`
  background: #fafafa;
  border-radius: 8px;
  width: 100%;
  padding: 24px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Form = styled.View`
  width: 100%;
  height: 124px;
  margin-top: 32px;
`;
export const Input = styled.TextInput`
  width: 100%;
  height: 50px;
  background: #ffffff;
  border-radius: 8px;
  margin-bottom: 24px;
  padding: 5px 10px;
`;

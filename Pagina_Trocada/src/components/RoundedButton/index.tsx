// RoundButton.tsx
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { ButtonContainer, ButtonText } from './styles';

interface RoundButtonProps {
  onPress: () => void;
}

const RoundButton: React.FC<RoundButtonProps> = ({ onPress }) => (
  <ButtonContainer onPress={onPress}>
    <ButtonText>+</ButtonText>
  </ButtonContainer>
);

export default RoundButton;

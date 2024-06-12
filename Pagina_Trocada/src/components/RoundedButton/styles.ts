// styles.ts
import styled from 'styled-components/native';
import theme from '../../theme';

export const ButtonContainer = styled.TouchableOpacity`
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: ${theme.COLORS.BRAND_LIGHT};
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: ${theme.COLORS.WHITE};
  font-size: ${theme.FONT_SIZE.XXL}px;
  font-family: ${theme.FONT_FAMILY.BOLD};
`;

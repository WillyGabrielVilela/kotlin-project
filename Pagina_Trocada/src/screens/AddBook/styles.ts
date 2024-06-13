import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.COLORS.BRAND_MID};
`;

export const Input = styled.TextInput`
  width: 80%;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  color: ${({ theme }) => theme.COLORS.GRAY_800};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`;

export const StyledButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.BRAND_YELLOW};
  padding: 15px 20px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  width: 80%;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_800};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;
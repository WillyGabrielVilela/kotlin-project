import styled from 'styled-components/native';
import { Image } from 'expo-image';

export const Container = styled.View`
  flex: 1;
  padding: 32px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.BRAND_LIGHT};
`;

export const Name = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_800};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXXL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const Picture = styled(Image)`
  margin-top: 50px;
  width: 100px;
  height: 100px;
  border-radius: 999px;
`;

export const SectionTitle = styled.Text`
  margin-top: 20px;
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_800};
  margin-bottom: 10px;
`;

export const BookItem = styled.View`
  margin-right: 10px;
  align-items: center;
`;

export const BookImage = styled.Image`
  width: 80px;
  height: 120px;
  margin-bottom: 5px;
`;

export const BookTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.GRAY_800};
`;

export const ButtonText = styled.Text`
  margin-top:30px;
  min-width: 160px;
  color: ${({ theme }) => theme.COLORS.GRAY_800};
  background-color: ${({ theme }) => theme.COLORS.BRAND_YELLOW};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-weight: bold;
  text-align: center;
  padding: 20px;
  border-radius: 8px;
`;

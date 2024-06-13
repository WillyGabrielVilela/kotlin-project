import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.COLORS.BRAND_MID};
`;

export const BookImage = styled.Image`
  width: 200px;
  height: 300px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const BookTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.COLORS.GRAY_800};
`;

export const BookDescription = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const NoImageContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 300px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  margin-bottom: 20px;
`;

export const NoImageText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-style: italic;
  color: ${({ theme }) => theme.COLORS.GRAY_300};
`;

export const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const RentButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.BRAND_MID};
  padding: 10px;
  border-radius: 5px;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  min-height: 56px;
  max-height: 56px;
  width: 100%;
`;

export const RentedButton = styled(RentButton)`
  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_800};
  background-color: ${({ theme }) => theme.COLORS.BRAND_YELLOW};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-weight: bold;
  text-align: center;
  padding: 20px;
  border-radius: 8px;
`;
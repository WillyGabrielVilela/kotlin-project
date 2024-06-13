import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BRAND_MID};
`;


export const SuggestionsContainer = styled.View`
  margin-top: 50px;
  padding: 10px;
`;

export const SuggestionsTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const BookItem = styled.View`
  flex: 1;
  align-items: center;
`;

export const GridContainer = styled.View`
  justify-content: space-between;
`;

export const BookImage = styled.Image`
  width: 100px;
  height: 150px;
  border-radius: 10px;
  margin: 10px;
`;

export const NoImageContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 150px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const NoImageText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-style: italic;
  color: ${({ theme }) => theme.COLORS.GRAY_300};
`;
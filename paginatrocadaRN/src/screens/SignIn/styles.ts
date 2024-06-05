import styled from 'styled-components/native';

import { LinearGradient } from 'expo-linear-gradient';

export const GradientBackground = styled(LinearGradient).attrs({
  colors: ['#F0D7FF', '#F7C5FF', '#FFF1BF'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 52px;
  background-color: ${({ theme }) => theme.COLORS.DEGRADE};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_600};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXXL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  text-align: center;
`;

export const Slogan = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_800};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  text-align: center;
  margin-bottom: 32px;
`; 

export const ImageLogo = styled.Image`
  flex: 1;
  /* width: 100%; */
  /* height: 100% */
`
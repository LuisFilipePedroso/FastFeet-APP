import styled, { css } from 'styled-components/native';

import { colors } from '~/styles/global';

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

export const Card = styled.View<{
  height: number;
  marginTop: number;
  backgroundColor?: string;
  row?: boolean;
  noPadding?: boolean;
}>`
  flex-direction: ${({ row }) => (row ? 'row' : 'column')};
  margin: ${({ marginTop }) => marginTop}px 20px 0;
  height: ${({ height }) => height}px;
  background-color: ${({ backgroundColor }) => backgroundColor || '#ffffff'};
  box-shadow: 0px 0px 3px #0000001a;
  border-radius: 4px;
  padding: ${({ noPadding }) => (noPadding === true ? '0px' : '15px')};
`;

export const TitleWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${colors.primary};
  margin-left: 5px;
`;

export const DescriptionWrapper = styled.View`
  margin-top: 5px;
`;

export const TitleDescription = styled.Text`
  text-transform: uppercase;
  color: #999999;
  font-weight: bold;
`;

export const InfoText = styled.Text`
  color: #666666;
  font-weight: 500;
  margin-top: 5px;
  margin-bottom: 15px;
  font-size: 14px;
`;

export const DatesWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const InfoDateWrapper = styled.View``;

export const ButtonWrapper = styled.View<{ borderRight?: boolean }>`
  width: 112px;
  justify-content: center;
  align-items: center;

  ${({ borderRight }) =>
    borderRight === true &&
    css`
      border-style: solid;
      border-right-width: 1px;
      border-right-color: #0000001a;
    `}
`;

export const Button = styled.TouchableOpacity`
  height: 54px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: 12px;
  text-align: center;
  color: #999999;
  line-height: 16px;
  margin-top: 3px;
`;

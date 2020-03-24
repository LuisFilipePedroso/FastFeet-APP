import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  height: 169px;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 1px 1px 3px #0000001a;
`;

export const TitleWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 5px;
`;

export const Title = styled.Text<{ fontSize: number; color: string }>`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => `${fontSize}px`};
  font-weight: bold;
  margin-left: 10px;
`;

export const StepItem = styled.View<{ accomplished: string }>``;

export const DeliveryDetail = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  height: 64px;
  border-radius: 4px;
  background-color: #f8f9fd;
  padding: 15px;
`;

export const Button = styled.TouchableOpacity``;

export const DetailColumn = styled.View``;

export const Text = styled.Text<{
  fontSize: number;
  color: string;
  bold: boolean;
}>`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => `${fontSize}px`};
  margin-bottom: 3px;

  ${({ bold }) =>
    bold === true &&
    css`
      font-weight: bold;
    `}
`;

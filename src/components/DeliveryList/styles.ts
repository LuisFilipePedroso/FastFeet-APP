import styled, { css } from 'styled-components/native';

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  font-size: 22px;
  color: #444444;
  font-weight: bold;
`;

export const ButtonsWrapper = styled.View`
  width: 40%;
  flex-direction: row;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity<{ isActive: boolean }>`
  ${({ isActive }) =>
    isActive === true &&
    css`
      border-bottom-width: 1px;
      border-style: solid;
      border-bottom-color: #7d40e7;
    `}
`;

export const DeliveryProcess = styled.View``;

export const DeliveryDetail = styled.View``;

export const Text = styled.Text<{ isActive: boolean }>`
  font-size: 12px;
  font-weight: bold;
  color: #999999;

  ${({ isActive }) =>
    isActive === true &&
    css`
      color: #7d40e7;
    `}
`;

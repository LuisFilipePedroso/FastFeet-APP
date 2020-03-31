/* eslint-disable no-unused-expressions */
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  height: 80px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Test = styled.View`
  height: 100%;
  margin-top: 40px;
  align-items: flex-start;
`;

export const Line = styled.View<{ width?: number }>`
  height: 2px;
  background-color: #7d40e7;

  ${({ width }) =>
    width &&
    css`
      width: ${width}px;
    `};
`;

export const Step = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Indicator = styled.View<{ active: boolean }>`
  width: 9px;
  height: 9px;
  border-radius: 4.5px;
  background-color: ${({ active }) => (active ? '#7d40e7' : '#fff')};
  border: 1px solid #7d40e7;
`;

export const Text = styled.Text`
  font-size: 12px;
  color: #999999;
  margin-left: -20px;
  text-align: center;
  margin-top: 5px;
`;

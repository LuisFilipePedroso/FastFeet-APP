import styled, { css } from 'styled-components/native';

export const Container = styled.View<{ width: string; alignCenter?: boolean }>`
  width: ${({ width }) => width};
  align-items: ${({ alignCenter }) =>
    alignCenter === true ? 'center' : 'flex-start'};
`;

export const DefaultImage = styled.View<{
  backgroundColor?: string;
  width: string;
  height: string;
  borderRadius: string;
}>`
  align-items: center;
  justify-content: center;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ borderRadius }) => borderRadius};
  border-style: solid;
  border-width: 1px;
  border-color: ${({ backgroundColor }) => backgroundColor || '#e8e8e8'};

  ${({ backgroundColor }) =>
    backgroundColor &&
    backgroundColor !== '' &&
    css`
      background-color: ${backgroundColor};
    `}
`;

export const DefaultImageText = styled.Text`
  font-size: 31px;
  color: #a28fd0;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: contain;
  border-radius: ${({ borderRadius }) => borderRadius};
`;

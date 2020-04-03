import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

export const Content = styled.View`
  margin-top: -60px;
  margin-left: 20px;
  margin-right: 20px;
  height: auto;
  background-color: #fff;
  border-radius: 4px;
`;

export const Item = styled.View`
  height: 56px;
  border-radius: 4px;
  box-shadow: 0px 0px 3px #0000001a;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding: 15px;
`;

export const Text = styled.Text`
  font-size: 16px;
  color: #999999;
`;

export const SmallText = styled.Text`
  font-size: 12px;
  color: #c1c1c1;
`;

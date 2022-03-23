import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  padding: 12px;
  border-radius: 10px;
  background-color: #ededed;

  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const IconView = styled.View`
  width: 75px;
  height: 75px;
  padding: 12px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  background-color: #adadad;
`;
export const InformationView = styled.View`
  flex: 1;
  height: 100%;
  padding-left: 12px;
`;

export const Title = styled.Text`
  font-size: 18px;
  letter-spacing: 1px;
  font-weight: bold;
  margin-bottom: 6px;
`;

export const Description = styled.Text.attrs({
  numberOfLines: 2,
})`
  flex-shrink: 1;
  font-size: 14px;
`;

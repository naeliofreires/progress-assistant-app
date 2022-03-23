import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const SubHeader = styled.View`
  height: 40px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding-left: 12px;
  padding-right: 12px;
  border-bottom-width: 1px;
  border-bottom-color: #fff;
`;

export const AmountTasks = styled.View`
  width: 25px;
  height: 25px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  background-color: #adadad;
`;

export const AmountTasksText = styled.Text``;

export const Title = styled.Text`
  color: #151515;
  font-size: 12px;
  text-transform: uppercase;
`;

import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  padding: 12px;
  border-radius: 10px;
  background-color: #ededed;

  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const IconView = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
`;
export const InformationView = styled.View`
  flex: 1;
  height: 100%;
  padding-top: 8px;
  padding-left: 12px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 18px;
  letter-spacing: 1px;
  font-weight: bold;
  margin-bottom: 6px;
`;

export const Done = styled.View`
  width: 15px;
  height: 15px;
  border-radius: 15px;
  background-color: gray;
`;

export const Description = styled.Text.attrs({
  numberOfLines: 2,
})`
  flex-shrink: 1;
  font-size: 14px;
`;

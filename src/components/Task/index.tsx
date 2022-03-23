import React from "react";

import * as S from "./styles";

export const Task = () => {
  return (
    <S.Container>
      <S.IconView />
      <S.InformationView>
        <S.Title>Item 01</S.Title>
        <S.Description>
          Description - maneira do Item 01 para funcionar fodamente
          signal=undefined see troubleshooting:
          https://github.com/jest-community/vscode-jest/blob/master/README.md#troubleshooting
        </S.Description>
      </S.InformationView>
    </S.Container>
  );
};

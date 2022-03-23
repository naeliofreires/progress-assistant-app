import React from "react";
import { Task } from "../../components/Task";
import { useStore } from "../../store/StoreProvider";

import * as S from "./styles";

export function Home() {
  const store = useStore();

  return (
    <S.Container>
      <S.SubHeader>
        <S.Title>your tasks</S.Title>

        <S.AmountTasks>
          <S.AmountTasksText>10</S.AmountTasksText>
        </S.AmountTasks>
      </S.SubHeader>
    </S.Container>
  );
}

import { TaskType } from '../Task/types';

export type Props = {
  task: TaskType;
  onPressBackButton(): void;
};

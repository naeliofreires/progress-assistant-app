import { TaskType } from '../components/Task/types';

export enum PROMISE_STATUS {
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE',
  CANCELED = 'CANCELED',
}

export type PromiseResult<T> = {
  data?: T;
  message?: string;
  status: PROMISE_STATUS;
};

export type ErrorTypeOverlap = {
  message: string;
};

export type StoreProviderType = {
  tasks: TaskType[];
  actions: {
    update(task: TaskType): Promise<PromiseResult<TaskType>>;
  };
};

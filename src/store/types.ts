import { TaskType } from '../components/Task/types';
import { TaskInput } from '../graphql/services/types';

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

export enum TASK_STATUS {
  ALL = 'ALL',
  DONE = 'DONE',
  IN_PROGRESS = 'IN_PROGRESS',
}

export class StoreProviderType {
  tasks: TaskType[];
  filteredTasks: TaskType[];
  filter: { selectedStatus: TASK_STATUS };

  actions!: {
    onChangeFilter(value: TASK_STATUS): void;
    add(task: TaskInput): Promise<PromiseResult<TaskType>>;
    update(task: TaskType): Promise<PromiseResult<TaskType>>;
  };

  constructor() {
    this.tasks = [];
    this.filteredTasks = [];
    this.filter = { selectedStatus: TASK_STATUS.ALL };
  }
}

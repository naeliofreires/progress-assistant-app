import { TaskType } from '../../components/Task/types';
import { TASK_STATUS } from '../../store/types';

export const applyFilter = (status: TASK_STATUS, tasks: TaskType[]): TaskType[] => {
  let response = [] as TaskType[];

  switch (status) {
    case TASK_STATUS.ALL:
      response = [];
      break;

    case TASK_STATUS.IN_PROGRESS:
      response = tasks.filter(i => !i.attributes.completed);
      break;

    case TASK_STATUS.DONE:
      response = tasks.filter(i => i.attributes.completed);
      break;
  }

  return response;
};

export const TaskUtil = { applyFilter };

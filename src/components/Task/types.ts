export type TaskAttributesType = {
  completed: boolean;
  date: string;
  description: string;
  title: string;
};

export type TaskType = {
  id: string | number;
  attributes: TaskAttributesType;
};

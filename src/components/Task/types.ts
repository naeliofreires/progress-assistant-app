export type TaskType = {
  id: string | number;
  attributes: {
    completed: boolean;
    date: string;
    description: string;
    title: string;
  };
};

import { RequestDocument } from 'graphql-request';
import { ErrorType, TaskInput } from './types';
import { graphQLClient } from '../api';
import { TaskType } from '../../components/Task/types';
import { TaskGraphQL } from '../queries';

async function load(pagination = { page: 1, pageSize: 10 }): Promise<TaskType[]> {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await graphQLClient.request(TaskGraphQL.load, { pagination, sort: ['date'] });
      resolve(response.tasks.data);
    } catch (e) {
      reject((e as ErrorType).response?.errors ?? 'an error occurred ');
    }
  });
}

async function save(task: TaskInput): Promise<TaskType> {
  return new Promise(async (resolve, reject) => {
    try {
      const requestDocument = { data: task } as unknown as RequestDocument;
      const response = await graphQLClient.request(TaskGraphQL.save, requestDocument);
      const data = response?.createTask?.data;
      resolve(data);
    } catch (e: unknown) {
      reject((e as ErrorType).response?.errors ?? 'an error occurred ');
    }
  });
}

async function remove(id: number): Promise<void> {
  return new Promise(async (resolve, reject) => {
    try {
      const requestDocument = { id } as unknown as RequestDocument;
      const response = await graphQLClient.request(TaskGraphQL.remove, requestDocument);
      const data = response?.deleteTask?.data;
      resolve(data);
    } catch (e) {
      const [error] = (e as ErrorType).response?.errors ?? [];
      reject(error.message ?? 'an error ocurred ');
    }
  });
}

async function update(task: TaskType): Promise<TaskType> {
  return new Promise(async (resolve, reject) => {
    try {
      const requestDocument = { id: task.id, data: task.attributes } as unknown as RequestDocument;
      const response = await graphQLClient.request(TaskGraphQL.update, requestDocument);
      const data = response?.updateTask.data as TaskType;
      resolve(data);
    } catch (e) {
      const [error] = (e as ErrorType).response?.errors ?? [];
      reject(error.message ?? 'an error ocurred ');
    }
  });
}

export const TaskService = { load, save, remove, update };

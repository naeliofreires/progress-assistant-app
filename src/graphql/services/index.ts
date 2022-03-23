import { RequestDocument, gql, request } from "graphql-request";
import { ErrorType, TaskInput } from "./types";
import { graphQLClient } from "../api";
import { TaskType } from "../../components/Task/types";

async function load(
  pagination = { page: 1, pageSize: 5 }
): Promise<TaskType[]> {
  return new Promise(async (resolve, reject) => {
    try {
      const {
        tasks: { data },
      } = await graphQLClient.request(
        gql`
          query ($pagination: PaginationArg, $sort: [String]) {
            tasks(pagination: $pagination, sort: $sort) {
              data {
                id
                attributes {
                  title
                  description
                  date
                  completed
                }
              }
            }
          }
        `,
        { pagination, sort: ["date"] }
      );

      resolve(data);
    } catch (e) {
      reject((e as ErrorType).response?.errors ?? "an error occurred ");
    }
  });
}

async function save(task: TaskInput): Promise<any> {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await graphQLClient.request(
        gql`
          mutation ($data: TaskInput!) {
            createTask(data: $data) {
              data {
                id
                attributes {
                  title
                  description
                  date
                  completed
                }
              }
            }
          }
        `,
        { data: task } as unknown as RequestDocument
      );

      const data = response?.createTask?.data;
      resolve(data);
    } catch (e: unknown) {
      reject((e as ErrorType).response?.errors ?? "an error occurred ");
    }
  });
}

async function remove(id: number): Promise<void> {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await graphQLClient.request(
        gql`
          mutation ($id: ID!) {
            deleteTask(id: $id) {
              data {
                id
                attributes {
                  title
                  description
                }
              }
            }
          }
        `,
        { id } as unknown as RequestDocument
      );

      const data = response?.deleteTask?.data;
      resolve(data);
    } catch (e) {
      const [error] = (e as ErrorType).response?.errors ?? [];

      reject(error.message ?? "an error ocurred ");
    }
  });
}

async function update(task: any): Promise<any> {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await graphQLClient.request(
        gql`
          mutation ($id: ID!, $data: TaskInput!) {
            updateTask(id: $id, data: $data) {
              data {
                id
                attributes {
                  title
                  description
                  completed
                  date
                }
              }
            }
          }
        `,
        {
          id: task.id,
          data: task.attributes,
        } as unknown as RequestDocument
      );

      const { data } = response?.updateTask;
      resolve(data as any);
    } catch (e) {
      const [error] = (e as ErrorType).response?.errors ?? [];

      reject(error.message ?? "an error ocurred ");
    }
  });
}

export const TaskService = { load, save, remove, update };

import { gql } from 'graphql-request';

export const TaskGraphQL = {
  load: gql`
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
  remove: gql`
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
  save: gql`
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
  update: gql`
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
};

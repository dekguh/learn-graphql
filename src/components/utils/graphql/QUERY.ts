import { gql } from '@apollo/client'

export const QUERY_GET_TODOS_USER = gql`
    query getTodosByUser($user: Int) {
        todos(where: {
            user: $user
        }) {
            id
            title
            date
        }
    }
`

export const QUERY_GET_TODO_DETAIL = gql`
    query getTodoDetail($id: ID!) {
        todo(id: $id) {
        id
        title
        date
        }
    }
`
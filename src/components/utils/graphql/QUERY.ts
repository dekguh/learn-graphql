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
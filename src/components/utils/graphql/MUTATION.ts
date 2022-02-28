import { gql } from '@apollo/client'

export const MUTATION_LOGIN_USER = gql`
    mutation LoginUser($input : UsersPermissionsLoginInput!) {
        login(
            input: $input
        ) {
            jwt
        }
    }
`

export const MUTATION_CREATE_TODO = gql`
    mutation createTodoByUser($input : createTodoInput) {
        createTodo (
        input: $input
        ) {
            todo {
                id
                title
                date
                user {
                    id
                }
            }
        }
    }
`
import { gql } from "@apollo/client";

export const MUTATION_LOGIN_USER = gql`
    mutation LoginUser($input : UsersPermissionsLoginInput!) {
        login(
            input: $input
        ) {
            jwt
        }
    }
`
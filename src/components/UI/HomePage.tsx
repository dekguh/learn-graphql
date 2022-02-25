import React from 'react'
import { useQuery, gql } from '@apollo/client'

const POST_QUERY = gql`
    query {
        post(id: 1) {
        id
        title
        body
        }
    }
`

const HomePage = () => {
    const { data, loading, error } = useQuery(POST_QUERY)
    console.log(data)

    return (
        <div>HomePage</div>
    )
}

export default HomePage
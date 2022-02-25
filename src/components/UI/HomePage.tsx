import React from 'react'
import { useQuery, gql } from '@apollo/client'
import LoadingScreen from './LoadingScreen'

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

    if(loading) return(<LoadingScreen />)

    return (
    <>
        <div>HomePage</div>
    </>
    )
}

export default HomePage
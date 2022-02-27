import React from 'react'
import { useQuery, gql } from '@apollo/client'
import LoadingScreen from './LoadingScreen'
import Input from './control/Input'

const POST_QUERY = gql`
    query {
        artikel(id: 1) {
            id
            judul
            konten
        }
    }
`

const HomePage = () => {
    const { data, loading, error } = useQuery(POST_QUERY)

    if(loading) return(<LoadingScreen />)

    console.log(data)

    return (
    <>
        <div>
            <Input />
        </div>
    </>
    )
}

export default HomePage
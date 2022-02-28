import React, { ChangeEvent, useState } from 'react'
import withAuth from '../utils/HOC/withAuth'
import styled from 'styled-components'
import ListTodo from './control/ListTodo'
import FormAddTodo from './form/FormAddTodo'
import { parseJwt } from '../utils/utils'
import { MUTATION_CREATE_TODO } from '../utils/graphql/MUTATION'
import { useMutation, useQuery } from '@apollo/client'
import LoadingScreen from './LoadingScreen'
import { QUERY_GET_TODOS_USER } from '../utils/graphql/QUERY'

const HomePage = () => {
    const [dataTodo, setDataTodo] = useState({
        title: '',
        date: ''
    })
    const [createTodo, { loading }] = useMutation(MUTATION_CREATE_TODO)
    const getTodosList = useQuery(QUERY_GET_TODOS_USER, {
        variables: {
            user: parseJwt(localStorage.getItem('jwt_learn')).id
        }
    })

    if(loading || getTodosList.loading) return(<LoadingScreen />)

    return (
    <>
        <Wrapper>
            <div style={{ marginBottom: '20px' }}>
                <FormAddTodo
                    titleOnChange={(e : ChangeEvent<HTMLInputElement>) => setDataTodo({ ...dataTodo, title: e.target.value })}
                    dateOnChange={(e : ChangeEvent<HTMLInputElement>) => setDataTodo({ ...dataTodo, date: e.target.value })}
                    createOnClick={() => {
                        createTodo({
                            variables: {
                                input: {
                                    data: {
                                        title: dataTodo.title,
                                        date: dataTodo.date,
                                        user: parseJwt(localStorage.getItem('jwt_learn')).id,
                                    }
                                }
                            },
                            onCompleted: () => {
                                getTodosList.refetch()
                            }
                        })
                    }}
                />
            </div>

            {getTodosList.data && (<ListTodo
                list={getTodosList.data.todos}
                refetchList={getTodosList.refetch}
            />)}
        </Wrapper>
    </>
    )
}

const Wrapper = styled.div`
    max-width: 500px;
    width: 100%;
    padding: 50px 20px;
    margin: 0 auto;
`

export default withAuth(HomePage)
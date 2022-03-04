import React, { ChangeEvent, MouseEvent, useState } from 'react'
import withAuth from '../utils/HOC/withAuth'
import styled from 'styled-components'
import ListTodo from './control/ListTodo'
import FormAddTodo from './form/FormAddTodo'
import { parseJwt } from '../utils/utils'
import { MUTATION_CREATE_TODO } from '../utils/graphql/MUTATION'
import { useMutation, useQuery } from '@apollo/client'
import LoadingScreen from './LoadingScreen'
import { QUERY_GET_TODOS_USER } from '../utils/graphql/QUERY'
import Nav from './header/Nav'
import FormEditTodo from './form/FormEditTodo'

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
    const [isFormAdd, setIsFormAdd] = useState<boolean>(true)
    const [todoId, setTodoId] = useState<number | string | undefined>('')

    const setForm = (val: boolean = true) => {
        setIsFormAdd(val)
    }

    if(loading || getTodosList.loading) return(<LoadingScreen />)

    console.log(todoId)

    return (
    <>
        <Wrapper>
            <Nav />

            <div style={{ marginBottom: '20px' }}>
                <h1>{isFormAdd ? 'Add todo' : 'Edit todo'}</h1>
                {isFormAdd && (<FormAddTodo
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
                />)}

                {!isFormAdd && (<FormEditTodo setForm={setForm} todoId={todoId}/>)}
            </div>

            {getTodosList.data && (<ListTodo
                list={getTodosList.data.todos}
                refetchList={getTodosList.refetch}
                setForm={setForm}
                setTodoId={setTodoId}
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
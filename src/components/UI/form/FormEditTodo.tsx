import { useLazyQuery, useMutation } from '@apollo/client'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { MUTATION_UPDATE_TODO } from '../../utils/graphql/MUTATION'
import { QUERY_GET_TODO_DETAIL } from '../../utils/graphql/QUERY'
import { IFormEditTodo } from '../../utils/types'
import ButtonPrimary from '../control/ButtonPrimary'
import Input from '../control/Input'

const FormEditTodo : React.FC<IFormEditTodo> = ({ titleOnChange, dateOnChange, editOnClick, setForm, todoId, refetchList }) => {
    const [getSingleData, { loading : loadingSingle, data : dataSingle }] = useLazyQuery(QUERY_GET_TODO_DETAIL, {
        variables: {
            id: todoId
        }
    })
    const [updateSingleTodo, { data : dataUpdate, loading : loadingUpdate }] = useMutation(MUTATION_UPDATE_TODO)
    const [dataTodo, setDataTodo] = useState<{[key: string] : any}>({
        title: '',
        date: ''
    })

    useEffect(() => {
        setDataTodo({
            title: dataSingle && dataSingle.todo.title,
            date: dataSingle && dataSingle.todo.date,
        })
    }, [dataSingle])

    useEffect(() => {
        todoId && getSingleData({
            variables: {
                id: todoId
            }
        })
    }, [todoId])

    return (
        <div>
            <div style={{ marginBottom: '8px' }}>
                <Input
                    placeholder='title'
                    type='text'
                    onChange={(e : ChangeEvent<HTMLInputElement>) => {
                        setDataTodo({
                            ...dataTodo,
                            title: e.target.value
                        })
                    }}
                    value={dataTodo && dataTodo.title}
                />
            </div>

            <div style={{ marginBottom: '8px' }}>
                <Input
                    placeholder='date'
                    type='date'
                    onChange={(e : ChangeEvent<HTMLInputElement>) => {
                        setDataTodo({
                            ...dataTodo,
                            date: e.target.value
                        })
                    }}
                    value={dataTodo && dataTodo.date}
                />
            </div>

            <div>
                <ButtonPrimary
                    text='edit todo'
                    onClick={() => {
                        updateSingleTodo({
                            variables: {
                                id: todoId,
                                title: dataTodo.title,
                                date: dataTodo.date
                            },
                            onCompleted: () => {
                                refetchList()
                                setForm(true)
                            }
                        })
                    }}
                />
            </div>
        </div>
    )
}

export default FormEditTodo
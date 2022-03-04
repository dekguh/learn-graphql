import { useLazyQuery } from '@apollo/client'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { QUERY_GET_TODO_DETAIL } from '../../utils/graphql/QUERY'
import { IFormAddTodo, IFormEditTodo } from '../../utils/types'
import ButtonPrimary from '../control/ButtonPrimary'
import Input from '../control/Input'

const FormEditTodo : React.FC<IFormEditTodo> = ({ titleOnChange, dateOnChange, editOnClick, setForm, todoId }) => {
    const [getSingleData, { loading, data, refetch }] = useLazyQuery(QUERY_GET_TODO_DETAIL, {
        variables: {
            id: todoId
        }
    })
    const [dataTodo, setDataTodo] = useState<{[key: string] : any}>({
        title: '',
        date: ''
    })

    useEffect(() => {
        setDataTodo({
            title: data && data.todo.title,
            date: data && data.todo.date,
        })
    }, [data])

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
                        setForm(true)
                    }}
                />
            </div>
        </div>
    )
}

export default FormEditTodo
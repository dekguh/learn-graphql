import { useMutation } from '@apollo/client'
import React from 'react'
import styled from 'styled-components'
import { MUTATION_DELETE_TODO } from '../../utils/graphql/MUTATION'
import { IListTodo } from '../../utils/types'

const ListTodo : React.FC<IListTodo> = ({ list, refetchList, onClickEdit, setForm }) => {
    const [deleteTodoByUser, { data, loading }] = useMutation(MUTATION_DELETE_TODO)
  return (
    <Table>
        <thead>
            <tr>
                <th>#</th>
                <th>to do</th>
                <th>date</th>
                <th>action</th>
            </tr>
        </thead>
        <tbody>
            {list && list.map((data, i) => (
                <tr key={i}>
                    <td>{i+1}</td>
                    <td>
                        <a href="#" onClick={() => setForm(false)}>{data.title}</a>
                    </td>
                    <td>{data.date}</td>
                    <td>
                        <button
                            style={{
                                color: 'red',
                                background: 'none',
                                border: 'none',
                                outline: 'none',
                                fontSize: '14px',
                                cursor: 'pointer'
                            }}
                            onClick={() => {
                                deleteTodoByUser({
                                    variables: {
                                        id: Number(data.id)
                                    },
                                    onCompleted: () => {
                                        refetchList()
                                    }
                                })
                            }}
                        >delete</button>
                    </td>
                </tr>
            ))}
        </tbody>
    </Table>
  )
}

const Table = styled.table`
    padding: 8px;
    border: 1px solid #E5E5E5;
    width: 100%;
    border-radius: 6px;
    & th {
        padding: 8px 8px;
        font-size: 16px;
        font-weight: 600;
        text-align: left;
    }
    & td {
        padding: 8px 8px;
        font-size: 16px;
        font-weight: 400;
    }
`

export default ListTodo
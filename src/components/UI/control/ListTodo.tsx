import React from 'react'
import styled from 'styled-components'

const ListTodo = () => {
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
            <tr>
                <td>1</td>
                <td>cooking</td>
                <td>2020-03-01</td>
                <td>
                    <button
                        style={{
                            color: 'red',
                            background: 'none',
                            border: 'none',
                            outline: 'none',
                            fontSize: '14px'
                        }}
                    >delete</button>
                </td>
            </tr>
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
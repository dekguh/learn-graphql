import React from 'react'
import withAuth from '../utils/HOC/withAuth'
import styled from 'styled-components'
import ListTodo from './control/ListTodo'
import FormAddTodo from './form/FormAddTodo'

const HomePage = () => {

    return (
    <>
        <Wrapper>
            <div style={{ marginBottom: '20px' }}>
                <FormAddTodo />
            </div>

            <ListTodo />
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
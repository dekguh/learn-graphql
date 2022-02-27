import { useMutation } from '@apollo/client'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { MUTATION_LOGIN_USER } from '../../utils/graphql/MUTATION'
import Alert from '../control/Alert'
import ButtonPrimary from '../control/ButtonPrimary'
import Input from '../control/Input'
import LoadingScreen from '../LoadingScreen'

const FormLogin = () => {
    const navigate = useNavigate()
    const [dataLogin, setDataLogin] = useState({
        email: '',
        password: ''
    })
    const [messageError, setMessageError] = useState<any>([])
    const [loginUser, { data, loading, error }] = useMutation(MUTATION_LOGIN_USER)

    useEffect(() => {
        error && setMessageError(error?.graphQLErrors || [])
        if(data) {
            setMessageError([])
            localStorage.setItem('jwt_learn', data.login.jwt)
            data.login.jwt && navigate('/')
        }
    }, [error, data])

    if(loading) return(<LoadingScreen />)

    return (
        <Wrapper>
            <Inner>
                <div style={{ marginBottom: '15px' }}>
                    <Title>Sign in</Title>
                </div>

                <div>
                    <div>
                        {messageError.length >= 1 && (<Alert
                            text={messageError[0].extensions.exception.data.data[0].messages[0].message}
                            type='danger'
                        />)}
                    </div>

                    <div style={{ marginBottom: '12px' }}>
                        <Label>e-mail</Label>
                        <Input
                            placeholder='email'
                            type='email'
                            value={dataLogin.email}
                            onChange={(e : ChangeEvent<HTMLInputElement>) => setDataLogin({ ...dataLogin, email: e.target.value })}
                        />
                    </div>

                    <div style={{ marginBottom: '12px' }}>
                        <Label>password</Label>
                        <Input
                            placeholder='password'
                            type='password'
                            value={dataLogin.password}
                            onChange={(e : ChangeEvent<HTMLInputElement>) => setDataLogin({ ...dataLogin, password: e.target.value })}
                        />
                    </div>

                    <div>
                        <ButtonPrimary
                            text='login'
                            onClick={() => loginUser({
                                variables: {
                                    input: {
                                        identifier: dataLogin.email,
                                        password: dataLogin.password,
                                    }
                                }
                            })}
                        />
                    </div>
                </div>
            </Inner>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    background-color: #DFF6FF;
    height: 100vh;
`

const Inner = styled.div`
    max-width: 400px;
    width: 100%;
    background-color: #FFFFFF;
    border-radius: 8px;
    box-shadow: 0 0 8px rgba(0, 0, 0, .09);
    padding: 20px;
`

const Title = styled.h2`
    font-size: 20px;
    font-weight: 600;
    color: #505050;
    line-height: 1.3;
    margin-top: 0;
    margin-bottom: 0;
`

const Label = styled.label`
    display: block;
    font-size: 14px;
    font-weight: 400;
    color: #505050;
    line-height: 1.3;
    margin-top: 0;
    margin-bottom: 8px;
`

export default FormLogin
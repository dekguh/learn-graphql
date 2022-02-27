import React from 'react'
import styled from 'styled-components'
import ButtonPrimary from '../control/ButtonPrimary'
import Input from '../control/Input'

const FormLogin = () => {
  return (
    <Wrapper>
        <Inner>
            <div style={{ marginBottom: '15px' }}>
                <Title>Sign in</Title>
            </div>

            <div>
                <div style={{ marginBottom: '12px' }}>
                    <Label>e-mail</Label>
                    <Input placeholder='email' type='email'/>
                </div>

                <div style={{ marginBottom: '12px' }}>
                    <Label>password</Label>
                    <Input placeholder='password' type='password'/>
                </div>

                <div>
                    <ButtonPrimary text='login'/>
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
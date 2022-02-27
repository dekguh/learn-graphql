import React from 'react'
import styled from 'styled-components'
import { IInput } from '../../utils/types'

const InputStyled = styled.input`
    padding: 11px 20px;
    border-radius: 4px;
    border: 1px solid #E5E5E5;
    font-size: 16px;
    width: 100%;
    &:focus {
        outline: none;
    }
`

const Input : React.FC<IInput> = ({ placeholder, onChange, value, style, type }) => {
  return (
    <InputStyled
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={style}
        type={type}
    />
  )
}

export default Input
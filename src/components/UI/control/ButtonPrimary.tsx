import React from 'react'
import { IButton } from '../../utils/types'
import styled from 'styled-components'

const ButtonStyled = styled.button`
    background: rgb(87,169,255);
    background: linear-gradient(73deg, rgba(87,169,255,1) 0%, rgba(1,27,249,1) 100%);
    font-size: 16px;
    color: #FFFFFF;
    padding: 11px 25px;
    border-radius: 4px;
    border: none;
    display: block;
    text-align: center;
    width: 100%;
`

const ButtonPrimary : React.FC<IButton> = ({ text, onClick, style }) => {
  return (
    <ButtonStyled onClick={onClick} style={style}>{text}</ButtonStyled>
  )
}

export default ButtonPrimary
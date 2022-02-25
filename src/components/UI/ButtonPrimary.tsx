import React from 'react'
import { IButton } from '../utils/types'
import styled from 'styled-components'

const ButtonStyled = styled.button`
    background: rgb(87,169,255);
    background: linear-gradient(73deg, rgba(87,169,255,1) 0%, rgba(1,27,249,1) 100%);
    font-size: 16px;
    color: #FFFFFF;
    padding: 13px 25px;
    border-radius: 4px;
    border: none;
`

const ButtonPrimary : React.FC<IButton> = ({ text, onClick }) => {
  return (
    <ButtonStyled onClick={onClick}>{text}</ButtonStyled>
  )
}

export default ButtonPrimary
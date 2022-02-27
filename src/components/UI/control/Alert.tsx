import React from 'react'
import styled from 'styled-components'
import { IAlert } from '../../utils/types'

const Alert : React.FC<IAlert> = ({ text, type = 'danger' }) => {
  return (
    <Danger>{text}</Danger>
  )
}

const Danger = styled.div`
    padding: 11px 11px;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 600;
    background-color: #FFB2B2;
    color: #981818;
    margin-bottom: 10px;
`

export default Alert
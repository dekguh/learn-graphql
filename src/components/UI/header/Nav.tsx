import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Nav = () => {
    const navigate = useNavigate()

    return (
        <div style={{ marginBottom: '30px' }}>
            <ListWrap>
                <li>
                    <a href="#" onClick={() => {
                        localStorage.removeItem('jwt_learn')
                        navigate('/login')
                    }}>logout</a>
                </li>
            </ListWrap>
        </div>
    )
}

const ListWrap = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-flow: row wrap;
    border-bottom: 1px solid #E7E7E7;

    & a {
        display: inline-block;
        position: relative;
        color: #585858;
        text-decoration: none;
        padding: 0 12px 12px 12px;
        transition: .7s;
    }

    & a:hover {
        background: rgb(87,169,255);
        background: linear-gradient(73deg, rgba(87,169,255,1) 0%, rgba(1,27,249,1) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`

export default Nav
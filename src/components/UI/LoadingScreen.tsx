import React from 'react'
import styled, { keyframes } from 'styled-components'

const LoadingScreen : React.FC = () => {
  return (
    <Wrapper>
        <Circle />
    </Wrapper>
  )
}

const Wrapper = styled.div`
    position: fixed;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.7);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`

const circleAnim = keyframes`
    0% {
        transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
        transform: translate(-50%, -50%) rotate(360deg);
    }
`

const Circle = styled.div`
    width: 30px;
    height: 30px;
    border-width: 4px;
    border-style: solid;
    border-top-color: rgb(255, 255, 255);
    border-bottom-color: rgb(183, 183, 183);
    border-left-color: rgb(183, 183, 183);
    border-right-color: rgb(183, 183, 183);
    border-radius: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    animation: ${circleAnim} 2s infinite linear;
`

export default LoadingScreen
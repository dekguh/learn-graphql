import React, { ComponentType, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import LoadingScreen from '../../UI/LoadingScreen'

const withPublic = <T extends any,>(Component : ComponentType<T>) : any => {
    return(props : any) => {
        const navigate = useNavigate()

        useEffect(() => {
            if(localStorage.getItem('jwt_learn')) {
                navigate('/')
            }
        })

        if(!localStorage.getItem('jwt_learn')) {
            return <Component {...props}/>
        }

        return <LoadingScreen />
    }
}

export default withPublic
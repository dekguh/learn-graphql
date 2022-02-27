import React, { ComponentType, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import LoadingScreen from '../../UI/LoadingScreen'

const withAuth = <T extends any,>(Component : ComponentType<T>) : any => {
    return (props : any) => {
        const navigate = useNavigate()

        useEffect(() => {
            if(!localStorage.getItem('jwt_learn')) {
                navigate('/login')
            }
        })

        if(localStorage.getItem('jwt_learn') != null) {
            return(
                <Component {...props}/>
            )
        }

        return <LoadingScreen />
  }
}

export default withAuth
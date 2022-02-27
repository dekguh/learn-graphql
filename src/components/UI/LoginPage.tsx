import React from 'react'
import withPublic from '../utils/HOC/withPublic'
import FormLogin from './form/FormLogin'

const LoginPage = () => {
  return (
    <FormLogin />
  )
}

export default withPublic(LoginPage)
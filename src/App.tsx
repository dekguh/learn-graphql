import React from 'react'
import { ApolloProvider } from '@apollo/client'
import { client } from './components/utils/graphql'
import HomePage from './components/UI/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './components/UI/LoginPage'

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/login' element={<LoginPage />}/>
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App;

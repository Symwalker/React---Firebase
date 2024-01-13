import React from 'react'
import Home from './views/Home'
import { useRoutes } from 'react-router-dom'
import Layout from './views/Layout'
import Login from './views/login'
import Signup from './views/singup'

const App = () => {
  let routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Login /> },
      ]
    },
    {
      path: "/register",
      element: <Signup />,
    }
  
  ];
  let element = useRoutes(routes);
  return (
    <div >

      {element}
    </div>
  )
}

export default App

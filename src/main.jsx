import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import UpdateCoffee from './Components/UpdateCoffee.jsx';
import AddCoffee from './Components/AddCoffee.jsx';
import LogIn from './Components/Login/Login.jsx';
import SignUp from './Components/Signup/Signup.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import Users from './Components/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('https://coffee-store-server-with-auth-qqla1tz93.vercel.app/coffee')
  },
  {
    path: "/addCoffee",
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: "/UpdateCoffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) => fetch(`https://coffee-store-server-with-auth-qqla1tz93.vercel.app/coffee/${params.id}`)
  },
  {
    path: "/logIn",
    element: <LogIn></LogIn>,
  },
  {
    path: "/signUp",
    element: <SignUp></SignUp>,
  },
  {
    path: "/users",
    element: <Users></Users>,
    loader: () => fetch('https://coffee-store-server-with-auth-qqla1tz93.vercel.app/user')

  },

]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)

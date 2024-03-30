import "./styles/globals.css"
import "./styles/theme.css"
import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Home} from "./components/Home/Home.jsx";
import {About} from "./components/About/About.jsx";
import {Projects} from "./components/Projects/Projects.jsx";
import {Resume} from "./components/Resume/Resume.jsx";

const router = createBrowserRouter([
    {
        path:'',
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/projects",
                element: <Projects/>,
            },
            {
                path: "/resume",
                element: <Resume/>,
            },
        ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)

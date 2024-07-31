import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css"
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import ABOUT from './component/About/ABOUT'
import Portfolid from './component/Portfolid/Portfolid'
import Contact from './component/Contact/Contact'
import Notfound from './component/Notfound/Notfound'
import Layout from './component/Layout/Layout';
import Home from './component/Home/Home';




let BrowserRouter=createBrowserRouter([
  {path:"" ,element:<Layout/> ,children:[
   {path:"home" , element:<Home/>},
   {path:"/" , element:<Home/>},
    {path:"about",element:<ABOUT/>},
    {path:"portfolid",element:<Portfolid/>},
    {path:"contact" , element:<Contact/>},
    {path:"*",element:<Notfound/>},
  ]},
 
])

function App() {


  
  return (
    <>

<RouterProvider router={BrowserRouter}></RouterProvider>

  
    </>
  )
}

export default App

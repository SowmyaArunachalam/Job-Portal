import React from 'react'
import './Layout.css'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import {Toaster} from 'react-hot-toast'
const Layout = ({children}) => {
  return (
    <div>
    <Header/>
    
     <main style={{minHeight:"100vh"}}>
        {children}
     </main>  
     <Toaster position='top-right'/>
     <Footer /> 
    </div>
  )
}

export default Layout;
import React from 'react'
import Navbar from './Navbar'
import Container from "../../components/utils/Container";

const Layout = ({children}) => {
  return (
    <div className="bg-base h-screen">
        <Navbar />
        <Container>{children}</Container>
    </div>
  )
}

export default Layout
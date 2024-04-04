import React from 'react'
import HeaderComponent from '../HeaderCompoent/HeaderComponent'
import NavMenu from '../NavMenu/NavMenu'
import Footer from '../Footer/Footer'

const DefaultComponent = ({children}) => {
  return (
    <div>
        <NavMenu/>
        {children}
        <Footer/>
    </div>
  )
}

export default DefaultComponent
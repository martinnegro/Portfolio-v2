import { NextPage } from 'next'
import React from 'react'
import NavBar from './NavBar/NavBar'

import styles from './Layout.module.css'

const Layout: NextPage = ({ children }) => {
  return (
    <>  
        <div className={styles.navbar}>
            <NavBar/>
        </div>
        <main>{children}</main>
    </>
  )
}

export default Layout
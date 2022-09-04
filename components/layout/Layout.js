import React from 'react'
import Footer from './Footer';
import Header from './Header';
import styles from '../../styles/Home.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={`${styles.container} ${styles['min-height']}`}>
        {children}
      </main>
      <Footer 
        telefono={"(+506) 50142609"}
        correo={"betancourtmoran@gmail.com"}
        creador={"Michael Betancourt Mora- Desarrollador de Software"}
        derechos={"©2022 - Créditos de la web"}
      />
    </>
  )
}

export default Layout
import React from 'react'
import Footer from './Footer';
import Header from './Header';
import styles from '../../styles/Home.module.css';

const Layout = ({ children }) => {

  const fecha = new Date();

  return (
    <>
      <Header />
      <main className={`${styles.container} ${styles['min-height']}`}>
        {children}
      </main>
      <Footer 
        correo={"betancourtmoran@gmail.com"}
        creador={"Michael Betancourt Mora- Desarrollador de Software"}
        derechos={`${fecha.getFullYear()} - Créditos de la web`}
      />
    </>
  )
}

export default Layout
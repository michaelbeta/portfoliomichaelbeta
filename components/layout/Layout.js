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
      <Footer />
    </>
  )
}

export default Layout
// Libraries
import React from 'react'
import Helmet from 'react-helmet'
// Components
import Footer from '../Footer'
import Header from '../Header'
// Data
import { AuthProvider } from '../../contexts/AuthContext'
// Assets
import * as styles from './Layout.module.scss'

export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Clear Glade Farm</title>
        <link rel="canonical" href="https:/cleargladefarm.com" />
      </Helmet>
      <AuthProvider>
        <main>
          <Header />
          <div className={styles.root}>{children}</div>
          <Footer />
        </main>
      </AuthProvider>
    </>
  )
}

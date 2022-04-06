// Libraries
import React from 'react'
// Components
import Footer from '../Footer'
import Header from '../Header'
// Data
import { AuthProvider } from '../../contexts/AuthContext'
// Assets
import * as styles from './Layout.module.scss'

export default function Layout({ children }) {
  return (
    <AuthProvider>
      <main>
        <Header />
        <div className={styles.root}>{children}</div>
        <Footer />
      </main>
    </AuthProvider>
  )
}

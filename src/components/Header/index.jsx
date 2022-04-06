// Libraries
import React from 'react'
// Components
import { Link } from 'gatsby'
import { Navbar, Nav } from 'react-bootstrap'
// Data
import { useAuth } from '../../contexts/AuthContext'
// Assets
import * as styles from './Header.module.scss'

export default function Header() {
  const { logout, loggedIn } = useAuth()

  if (!loggedIn) {
    return null
  }
  return (
    <main className={styles.root}>
      <Navbar
        bg="light"
        expand="lg"
        className="px-5 py-3 border-bottom"
        fixed="top"
      >
        <Navbar.Brand className="d-flex flex-row justify-content-between align-items-center">
          <Link to="/">Clear Glade Farm</Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className={styles.links}>
            {loggedIn && (
              <>
                <Link to="/about">About</Link>

                <Link to="/announcements">Annoucements</Link>

                <Link to="/schedule">Schedule</Link>

                <Link to="/inventory">Inventory</Link>

                <Link to="/bookings">Book A Room</Link>

                <Link to="/media">Media</Link>

                <Link to="/" onClick={logout}>
                  Logout
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </main>
  )
}

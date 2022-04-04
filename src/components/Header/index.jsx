import React from "react"
import { Link } from "gatsby"
import logo from "../../images/logo-white.png"
import * as styles from "./Header.module.scss"
import { useAuth } from "../../contexts/AuthContext"
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"

export default function Header() {
  const { logout, loggedIn } = useAuth()

  return (
    <main className={styles.root}>
      <Navbar bg="light" expand="lg" className="px-5 py-3" fixed="top">
        <Navbar.Brand>
          <Link to="/">Clear Glade Farms</Link>
        </Navbar.Brand>
        <>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              {loggedIn && (
                <>
                  <Nav.Link>
                    <Link to="/about">About</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/announcements">Annoucements</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/schedule">Schedule</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/inventory">Inventory</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/bookings">Book A Room</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/media">Media</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/" onClick={logout}>
                      Logout
                    </Link>
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </>
        {/* </div> */}
        {/* </Container> */}
      </Navbar>
    </main>
  )
}

import React from "react"
import { Link } from "gatsby"
import * as styles from "./Header.module.scss"
import { useAuth } from "../../contexts/AuthContext"
import { Navbar, Nav } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"
import logo from "../../images/logo.png"

export default function Header() {
  const { logout, loggedIn } = useAuth()

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
          {/* <StaticImage
            src="../../images/logo.png"
            alt="logo"
            placeholder="blurred"
            layout="fixed"
            width={40}
            height={40}
          /> */}
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

import React, { useState } from "react"
import * as styles from "./Login.module.scss"
import { useAuth } from "../../contexts/AuthContext"
import { Form, Button, Toast, Row, Col } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"

export default function Login() {
  const { login, authError, setAuthError } = useAuth()

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleSetEmail = e => {
    setEmail(e.target.value)
  }

  const handleSetPassword = e => {
    setPassword(e.target.value)
  }

  const handleLogin = async () => {
    await login(email, password)
  }

  const handleCloseAuthError = () => {
    setAuthError("")
  }

  return (
    <main className={styles.root}>
      <div className={styles.error}>
        {authError && (
          <Row>
            <Col xs={15}>
              <Toast
                className="w-100"
                bg="danger"
                onClick={handleCloseAuthError}
                on
              >
                <Toast.Header className="justify-content-end">
                  <StaticImage
                    src="../../images/close.png"
                    alt="close"
                    placeholder="blurred"
                    layout="constrained"
                    width={10}
                    height={10}
                  />
                </Toast.Header>
                <Toast.Body>{authError}</Toast.Body>
              </Toast>
            </Col>
          </Row>
        )}
      </div>
      <Form
        className={styles.form}
        onSubmit={e => {
          e.preventDefault()
          handleLogin()
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={e => handleSetEmail(e)}
            type="email"
            placeholder="Enter email"
            className="mb-1"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={e => handleSetPassword(e)}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <div className={styles.buttonContainer}>
          <Button variant="primary" type="submit" className="w-100">
            Submit
          </Button>
        </div>
      </Form>
      <div className={styles.contact}>
        <a href="mailto:andrew@cleargladefarm.com">Contact us</a>
      </div>
    </main>
  )
}

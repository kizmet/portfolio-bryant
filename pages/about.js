import React, { useContext } from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import { ThemeContext, themes } from '../lib/themeContext'
import { Row, Col, Container } from 'reactstrap'

const AboutPage = () => {
  const theme = useContext(ThemeContext)
  return (
    <main className="cover">
      <div className="wrapper">
        <div className="base-page about-page">
          <Container>
            <Row className="mt-5">
              <Col md="6">
                <div className="left-side">
                  <h1 className="title fadein">Hello, Welcome</h1>
                  <h4 className="subtitle fadein">To About Page</h4>
                  <p className="subsubTitle fadein">
                    Feel free to read short description about me.
                  </p>
                </div>
              </Col>
              <Col md="6">
                <div className="fadein">
                  <p>
                    My name is Bryant Patton and I am an experienced software
                    engineer and freelance developer.{' '}
                  </p>
                  <p>...</p>
                  <p>....</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </main>
  )
}

AboutPage.Layout = BaseLayout
export default AboutPage

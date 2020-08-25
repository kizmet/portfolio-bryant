import React from 'react'
import Layout from './layouts/Layout'
import { Row, Col, Container, Button } from 'react-bootstrap'
import {
  faJsSquare,
  faHtml5,
  faCss3,
  faPython,
  faAws,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import PostgresIcon from '../svgs/PostgreSQL'

export default () => {
  console.dir(faAws)
  const Tools = () => {
    const data = [
      { name: 'AWS', img: faAws },
      { name: 'React', img: faReact },
      { name: 'PostgreSQL', img: PostgresIcon },
    ]

    const list = data.map((t, index) => (
      <Col className="list-inline-item col-md-auto" key={index}>
        <div className="badge badge-pill badge-dark list-inline">
          <FontAwesomeIcon
            icon={t.img}
            width="20px"
            height="20px"
            className="list-inline-item mx-2"
          />
          <span className="list-inline-item px-2 text-md">{t.name}</span>
        </div>
      </Col>
    ))

    return list
  }

  const Languages = () => {
    const data = [
      { name: 'HTML', img: faHtml5 },
      { name: 'CSS', img: faCss3 },
      { name: 'Python', img: faPython },
      { name: 'JavaScript', img: faJsSquare },
    ]

    const list = data.map((t, index) => (
      <Col className="list-inline-item col-md-auto" key={index}>
        <div className="badge badge-pill badge-dark list-inline m-2">
          <FontAwesomeIcon
            icon={t.img}
            width="20px"
            height="20px"
            className="list-inline-item mx-2"
          />
          <span className="list-inline-item px-2 text-md">{t.name}</span>
        </div>
      </Col>
    ))

    return list
  }

  return (
    <>
      <h3 className="">Technology and Tools</h3>
      <Row className="list-inline row justify-content-md-start py-3">
        <Tools></Tools>
      </Row>
      <h3 className="">Languages</h3>
      <Row className="list-inline row justify-content-md-start py-3">
        <Languages></Languages>
      </Row>
    </>
  )
}

import React from 'react'
import {HeaderLink} from './HeaderLink'
import {Container, Navbar} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBuilding} from '@fortawesome/free-regular-svg-icons'

export const Header = () => {
  const namesUrl = [
    {name: 'Список студентов', url: '/list'},
    {name: 'Заселение', url: '/add'},
    {name: 'Жалобы', url: '/complaints'},
    {name: 'Строй-отряд', url: '/renovations'},
  ]

  return (
    <Navbar collapseOnSelect bg="dark" expand="md" fixed="top" variant="dark">
      <Container>
        <Navbar.Brand>
          <FontAwesomeIcon icon={faBuilding}/>
          &nbsp;Общежитие №2
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <ul className="navbar-nav mr-auto">
            {namesUrl.map(({name, url}, index) =>
              <HeaderLink name={name} url={url} key={index}/>)}
          </ul>
          <button
            className="btn btn-outline-light btn-sm my-2 my-md-0"
            type="button"
          >
            Выход
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

import React from 'react'
import {HeaderLink} from './HeaderLink'
import {Container, Navbar} from 'react-bootstrap'

export const HeaderAdmin = () => {
  const namesUrl = [{name: 'Список студентов', url: '/'},
    {name: 'Заселение', url: '/add'},
    {name: 'Жалобы', url: '/zhaloby'},
    {name: 'Строй-отряд', url: 'stroyotryad'},
  ]

  return (
    <Navbar collapseOnSelect bg="dark" expand="md" fixed="top" variant="dark">
      <Container>
        <Navbar.Brand>
          <i className="fa fa-building"/>
          &nbsp;Общежитие №2
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <ul className="nav navbar-nav flex-grow-0">
            {namesUrl.map(({name, url}, index) =>
              <HeaderLink name={name} url={url} key={index}/>)}
          </ul>
          <button
            className="btn btn-outline-light btn-sm ml-auto my-2 my-md-0"
            type="button"
          >
            Выход
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

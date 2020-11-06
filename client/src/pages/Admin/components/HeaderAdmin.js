import React from 'react'
import {NavLink} from 'react-router-dom'

export const HeaderAdmin = ({url}) => {
  return (
    <nav className="navbar navbar-dark navbar-expand-md fixed-top bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          <i className="fa fa-building"/>
          &nbsp;Общежитие №2
        </a>
        <button
          data-toggle="collapse"
          className="navbar-toggler"
          data-target="#navcol-1"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse flex-grow-1"
          id="navcol-1"
        >
          <ul className="nav navbar-nav flex-grow-0">
            <li className="nav-item">
              <NavLink
                exact
                to={url}
                className='nav-link'
                activeClassName='active'
              >
                Список студентов
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to={`${url}/add`}
                className='nav-link'
                activeClassName='active'
              >
                Заселение
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Жалобы
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Строй-отряд
              </a>
            </li>
          </ul>
          <button
            className="btn btn-outline-light btn-sm ml-auto my-2 my-md-0"
            type="button"
          >
            Выход
          </button>
        </div>
      </div>
    </nav>
  )
}

import React from 'react'
import {NavLink} from 'react-router-dom'

export const HeaderLink = ({url, name}) => {
  return (
    <li className="nav-item">
      <NavLink
        exact
        to={url}
        className='nav-link'
        activeClassName='active'
      >
        {name}
      </NavLink>
    </li>
  )
}

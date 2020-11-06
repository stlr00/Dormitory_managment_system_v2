import React from 'react'
import {useRouteMatch} from 'react-router-dom'
import {HeaderAdmin} from './components/HeaderAdmin'
import './styles.css'
import {useAdminRoutes} from './adminRoutes'

export const MainAdmin = () => {
  const {path, url} = useRouteMatch()
  const routes = useAdminRoutes(path)
  return (
    <div>
      <HeaderAdmin url={url}/>
      <div className="container-lg">
        <div className="row">
          {routes}
        </div>
      </div>
    </div>
  )
}

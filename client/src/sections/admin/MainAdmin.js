import React from 'react'
import {useRouteMatch} from 'react-router-dom'
import {HeaderAdmin} from './common/HeaderAdmin'
import {useAdminRoutes} from './adminRoutes'
import './MainAdmin.css'

export const MainAdmin = () => {
  const {path, url} = useRouteMatch()
  const routes = useAdminRoutes(path)
  return (
    <>
      <HeaderAdmin url={url}/>
      <div className="container-lg">
        <div className="row">
          {routes}
        </div>
      </div>
    </>
  )
}

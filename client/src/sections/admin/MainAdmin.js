import React from 'react'
import {useRouteMatch} from 'react-router-dom'
import {HeaderAdmin} from './common/HeaderAdmin'
import './styles.css'
import {useAdminRoutes} from './adminRoutes'

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

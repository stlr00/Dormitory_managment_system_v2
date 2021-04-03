import React from 'react'
import {useRouteMatch} from 'react-router-dom'
import {Header} from './Common/Header'
import {useAdminRoutes} from './AdminRoutes'
import './Admin.css'

export const Admin = () => {
  const {url} = useRouteMatch()
  const routes = useAdminRoutes()
  return (
    <>
      <Header url={url}/>
      {routes}
    </>
  )
}

import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {MainAdmin} from './sections/admin/MainAdmin'

export const useRoutes = () => {
  return (
    <Switch>
      <Route path="/">
        <MainAdmin/>
      </Route>
      <Redirect to='/'/>
    </Switch>
  )
}

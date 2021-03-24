import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {MainAdmin} from './sections/admin/MainAdmin'

export const useRoutes = (isAuth) => {
  if (isAuth) {
    return (
      <Switch>
        <Route path="/admin" >
          <MainAdmin/>
        </Route>
        <Redirect to='/admin'/>
      </Switch>
    )
  }
  return (
    <Switch>

    </Switch>
  )
}

import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {List} from './List/List'
import {Add} from './Add/Add'
import {Complaints} from './Complaints/Complaints'

export const useAdminRoutes = () => {
  return (
    <Switch>
      <Route path='/list' exact>
        <List />
      </Route>
      <Route path='/add' exact>
        <Add />
      </Route>
      <Route path='/complaints' exact>
        <Complaints />
      </Route>
      <Redirect to="/list"/>
    </Switch>
  )
}

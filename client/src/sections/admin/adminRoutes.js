import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {List} from './list/List'
import {StudentAdd} from './add/StudentAdd'

export const useAdminRoutes = () => {
  return (
    <Switch>
      <Route path='/' exact>
        <List />
      </Route>
      <Route path='/add' exact>
        <StudentAdd />
      </Route>
    </Switch>
  )
}

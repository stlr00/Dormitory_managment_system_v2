import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {StudentList} from './components/StudenList/StudentList'
import {StudentAdd} from './StudentAdd'

export const useAdminRoutes = (path) => {
  return (
    <Switch>
      <Route path={path} exact>
        <StudentList />
      </Route>
      <Route path={`${path}/add`} exact>
        <StudentAdd />
      </Route>
    </Switch>
  )
}

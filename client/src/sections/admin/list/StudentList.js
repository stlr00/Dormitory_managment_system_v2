import React from 'react'
import {Table} from './Table'
import {Search} from './Search'

export const StudentList = () => {
  return (
    <>
      <div className="col-md-8 order-2 order-md-1">
        <Table/>
      </div>
      <div className="col-md-4 order-1 order-md-2">
        <Search/>
      </div>
    </>
  )
}

import React from 'react'
import {TableRow} from './TableRow'

export const Table = () => {
  return (
    <div className="card bg-light">
      <div className="card-body">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th className="d-none d-md-table-cell">ID</th>
                <th className="text-nowrap">Кв/К</th>
                <th>Ф.И.О</th>
                <th className="d-none d-md-table-cell">Курс</th>
                <th>Доп.</th>
              </tr>
            </thead>
            <tbody>
              <TableRow/>
              <TableRow/>
              <TableRow/>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

import React, {useEffect, useState} from 'react'
import {TableRow} from './TableRow'

export const Table = () => {
  const [users, setUsers] = useState([])

  const fetchData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    return data
  }
  useEffect(() => {
    fetchData().then((data) => setUsers(data))
  }, [])

  return (
    <div className="card bg-light">
      <div className="card-body">

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
            {users.map((user, index) => <TableRow user={user} key={index}/>)}
          </tbody>
        </table>
      </div>
    </div>
  )
}

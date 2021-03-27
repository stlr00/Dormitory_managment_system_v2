import React, {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInfoCircle, faTrashAlt, faPencilAlt}
  from '@fortawesome/free-solid-svg-icons'
import {Collapse} from 'react-bootstrap'

export const TableRow = ({user}) => {
  const [isOpen, setIsOpen] = useState(false)

  const collapseRow = (e) => {
    e.preventDefault()
    setIsOpen(!isOpen)
  }

  return (
    <>
      <tr>
        <td className="d-none d-md-table-cell">1</td>
        <td>25/3</td>
        <td>{user.name}</td>
        <td className="d-none d-md-table-cell">3</td>
        <td className="text-center">
          <a
            onClick={collapseRow}
            className="badge badge-pill badge-info text-white"
            href="#info" role="button"
            aria-expanded={isOpen}
            aria-controls="info-id"
          >
            <FontAwesomeIcon icon={faInfoCircle}/>
          </a>&nbsp;
          <a
            className="badge badge-pill badge-warning text-white"
            role="button"
            href="#edit"
          >
            <FontAwesomeIcon icon={faPencilAlt}/>
          </a>&nbsp;
          <a
            className="badge badge-pill badge-danger text-white"
            role="button"
            href="#delete"
          >
            <FontAwesomeIcon icon={faTrashAlt}/>
          </a>&nbsp;
        </td>
      </tr>
      <tr>
        <td className="no-cell-border p-0" colSpan="5">
          <Collapse in={isOpen}>
            <div id="info-id">
              <div className="card border rounded-0 no-card-border">
                <div className="card-body">
                  <p className="card-text"><strong>Дата
                    рождения:</strong>&nbsp;18.07.2000</p>
                  <p className="card-text">
                    <strong>Институт:</strong>&nbsp;ИТ</p>
                  <p className="card-text">
                    <strong>Курс:</strong>&nbsp;3
                  </p>
                  <p className="card-text"><strong>Постоянная
                    регистрация:</strong>&nbsp;г.
                    Армавир, ул. Ыыы</p>
                  <p className="card-text"><strong>Номер
                    договора:</strong>&nbsp;ОБ-2/31</p>
                  <p className="card-text"><strong>Дата
                    заселения:</strong>&nbsp;31.08. 2018
                  </p>
                  <p className="card-text"><strong>Дата
                    выселения:</strong>&nbsp;31.08. 2022
                  </p>
                </div>
              </div>
            </div>
          </Collapse>
        </td>
      </tr>
    </>
  )
}

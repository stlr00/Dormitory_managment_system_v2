import React from 'react'

export const Alert = () => {
  return (
    <div className="row">
      <div className="col-lg-10 m-auto">
        <div className="alert alert-success" role="alert">
          <button
            type="button" className="close" data-dismiss="alert"
            aria-label="Close"><span aria-hidden="true">×</span>
          </button>
          <span><strong>Студент успешно добавлен</strong><br/></span>
        </div>
      </div>
    </div>
  )
}

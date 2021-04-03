import React from 'react'

export const FieldsetType = () => {
  return (
    <fieldset className="form-group">
      <legend className="col-form-label pt-0 mb-md-1">
        Тип обучения
      </legend>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input" type="radio"
          id="undergraduate"
          name="type_of_study" checked=""
        />
        <label
          className="form-check-label"
          htmlFor="undergraduate"
        >
          Бакалавриат
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input" type="radio" id="specialty"
          name="type_of_study"
        />
        <label
          className="form-check-label"
          htmlFor="specialty"
        >
          Специалитет
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input" type="radio"
          id="magistracy"
          name="type_of_study"
        />
        <label
          className="form-check-label"
          htmlFor="magistracy"
        >Магистратура
        </label>
      </div>
    </fieldset>
  )
}

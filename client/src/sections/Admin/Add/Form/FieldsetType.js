import React from 'react'

export const FieldsetType = ({ type, setType }) => {
  return (
    <fieldset className="form-group">
      <legend className="col-form-label pt-0 mb-md-1">
        Тип обучения
      </legend>
      <div className="form-check form-check-inline">
        <input
          onChange={() => setType('Бакалавриат')}
          className="form-check-input" type="radio"
          id="undergraduate"
          name="type_of_study"
          checked={type === 'Бакалавриат'}
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
          onChange={() => setType('Специалитет')}
          className="form-check-input" type="radio" id="specialty"
          name="type_of_study" checked={type === 'Специалитет'}
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
          onChange={() => setType('Магистратура')}
          className="form-check-input" type="radio"
          id="magistracy"
          name="type_of_study"
          checked={type === 'Магистратура'}
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

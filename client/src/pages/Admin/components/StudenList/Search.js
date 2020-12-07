import React from 'react'

export const Search = () => {
  return (
    <div className="card bg-light mb-3">
      <div className="card-body">
        <h4 className="card-title">Поиск</h4>
        <form>
          <div className="form-group text-left">
            <h6 className="text-black-50">Тип</h6>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio" id="formCheck-1"
                checked="" value="fam"
                name="search-type"
              />
              <label
                className="form-check-label"
                htmlFor="formCheck-1"
              >
              По фамилии
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio" id="formCheck-2"
                value="course"
                name="search-type"
              />

              <label
                className="form-check-label"
                htmlFor="formCheck-2">
              По номеру курса
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio" id="formCheck-3"
                value="room"
                name="search-type"
              />
              <label
                className="form-check-label" htmlFor="formCheck-3">
                По номеру квартиры
              </label>
            </div>
          </div>
          <input
            className="form-control" type="text"
            placeholder="Введите параметры поиска"/>
        </form>
      </div>
    </div>
  )
}

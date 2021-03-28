import React, {useState} from 'react'

export const Search = () => {
  const [text, setText] = useState('')
  const [type, setType] = useState('fam')

  const onTextChange= (event) => {
    setText(event.target.value)
  }
  const onTypeChange = (event) => {
    setType(event.target.value)
  }

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
                type="radio" id="fam"
                value="fam"
                name="search-type"
                checked={type === 'fam'}
                onChange={onTypeChange}
              />
              <label
                className="form-check-label"
                htmlFor="fam"
              >
              По фамилии
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio" id="course"
                value="course"
                name="search-type"
                checked={type === 'course'}
                onChange={onTypeChange}
              />

              <label
                className="form-check-label"
                htmlFor="course">
              По номеру курса
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio" id="kv"
                value="kv"
                name="search-type"
                checked={type === 'kv'}
                onChange={onTypeChange}
              />
              <label
                className="form-check-label" htmlFor="kv">
                По номеру квартиры
              </label>
            </div>
          </div>
          <input
            className="form-control" type="text"
            placeholder="Введите параметры поиска"
            value={text}
            onChange={onTextChange}
          />
        </form>
      </div>
    </div>
  )
}

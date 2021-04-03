import React from 'react'
import {Alert} from './Alert'
import {FieldsetType} from './Form/FieldsetType'

export const Add = () => {
  return (
    <div className="container">
      {Alert}
      <div className="row">
        <div className="col-lg-10 m-lg-auto">
          <div className="card bg-light">
            <div className="card-body">
              <h2 className="card-title">Добавление нового студента</h2>
              <p className="card-text">
                Здесь вы можете добавить нового студента.
                Для этого заполните все поля и нажмите "добавить".</p>
              <form>
                <div className="form-row">
                  <div className="form-group col-md-4">
                    <label htmlFor="last_name">Фамилия</label>
                    <input
                      className="form-control"
                      type="text" id="last_name"
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="name">Имя</label>
                    <input
                      className="form-control"
                      type="text" id="name"/>
                  </div>
                  <div className="form-group col-md-4">
                    <label
                      htmlFor="patronymic">Отчество
                    </label>
                    <input
                      className="form-control"
                      type="text" id="patronymic"/>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-4">
                    <label htmlFor="birthday">Дата
                      рождения</label>
                    <input
                      className="form-control"
                      id="birthday" type="date"/>
                  </div>
                  <div className="form-group col">
                    <label htmlFor="address">
                      Адрес постоянной регистрации
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="address"/>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-3">
                    <label
                      htmlFor="contract">Номер договора
                    </label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <div className="input-group-text">ОБ-2</div>
                      </div>
                      <input
                        className="form-control"
                        type="text" id="contract"/>
                    </div>
                  </div>
                  <div className="col-md-8 col-lg-7">
                    <FieldsetType/>
                  </div>
                  <div className="form-group col-md-1 col-lg-2">
                    <label>Курс</label>
                    <input
                      className="form-control"
                      type="number" id="course"
                      min="1" max="5" step="1"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-4">
                    <label
                      htmlFor="institute">Институт
                    </label>
                    <select
                      className="form-control text-truncate" id="institute">
                      <option value="undefined" selected="">
                        Выберите институт
                      </option>
                      <option value="IT">ИТ</option>
                      <option value="THT">ТХТ</option>
                      <option value="RTC">РТС</option>
                    </select>
                  </div>
                  <div className="form-group col">
                    <label htmlFor="date_start">Дата
                      начала обучения
                    </label>
                    <input
                      className="form-control"
                      id="date_start" type="date"
                    />
                  </div>
                  <div className="form-group col">
                    <label htmlFor="date_end">Дата
                      окончания обучения</label>
                    <input
                      className="form-control"
                      id="date_end" type="date"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-4">
                    <label htmlFor="size">Размер
                      комнаты</label>
                    <select
                      className="form-control text-truncate"
                      id="size">
                      <option value="undefined" selected="">Выберите размер
                        комнаты
                      </option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="2">2</option>
                    </select>
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="flat">Квартира</label>
                    <select
                      className="form-control text-truncate" id="flat">
                      <option value="undefined" selected="">Выберите квартиру
                      </option>
                      <option value="33">33</option>
                      <option value="44">44</option>
                      <option value="45">45</option>
                    </select>
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="flat">Комната</label>
                    <select
                      className="form-control text-truncate" id="room">
                      <option value="undefined" selected="">Выберите комнату
                      </option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col text-center text-md-right">
                    <button
                      className="btn btn-success btn-lg"
                      type="submit">Добавить
                    </button>
                    <button
                      className="btn btn-danger btn-lg ml-4"
                      type="reset">
                      Сбросить
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

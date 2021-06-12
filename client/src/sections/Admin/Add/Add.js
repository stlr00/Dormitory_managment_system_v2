import React, {useEffect, useState} from 'react'
// import {useForm} from 'react-hook-form'
import { Alert } from './Alert'
import { FieldsetType } from './Form/FieldsetType'

export const Add = () => {
  const [lastName, setLastName] = useState('')
  const [firstName, setFirstName] = useState('')
  const [secondName, setSecondName] = useState('')
  const [birthday, setBirthday] = useState('')
  const [address, setAdress] = useState('')
  const [num, setNum] = useState('')
  const [type, setType] = useState('')
  const [course, setCourse] = useState('')
  const [institute, setInstitute] = useState('')
  const [dateStart, setDateStart] = useState('')
  const [dateEnd, setDateEnd] = useState('')

  useEffect(async ()=>{
    const body = {
      user: "hui"
    }

    const options = {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const data = await fetch('/rooms', options)
    const rooms = await data.json()
    console.log(rooms)
  },[])

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(e)
  }


  return (
    <div className="container">
      <Alert />
      <div className="row">
        <div className="col-lg-10 m-lg-auto">
          <div className="card bg-light">
            <div className="card-body">
              <h2 className="card-title">Добавление нового студента</h2>
              <p className="card-text">
                Здесь вы можете добавить нового студента.
                Для этого заполните все поля и нажмите "добавить".
              </p>
              <form onSubmit={(e)=>submitHandler(e)}>
                <div className="form-row">
                  <div className="form-group col-md-4">
                    <label htmlFor="last_name">Фамилия</label>
                    <input
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="form-control"
                      type="text" id="last_name"
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="name">Имя</label>
                    <input
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="form-control"
                      type="text" id="name"
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label
                      htmlFor="patronymic">Отчество
                    </label>
                    <input
                      value={secondName}
                      onChange={(e) => setSecondName(e.target.value)}
                      className="form-control"
                      type="text" id="patronymic"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-4">
                    <label htmlFor="birthday">Дата рождения</label>
                    <input
                      value={birthday}
                      onChange={(e) => setBirthday(e.target.value)}
                      className="form-control"
                      id="birthday" type="date"
                    />
                  </div>
                  <div className="form-group col">
                    <label htmlFor="address">
                      Адрес постоянной регистрации
                    </label>
                    <input
                      value={address}
                      onChange={(e) => setAdress(e.target.value)}
                      className="form-control"
                      type="text"
                      id="address"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-3">
                    <label htmlFor="contract">
                      Номер договора
                    </label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <div className="input-group-text">ОБ-2</div>
                      </div>
                      <input
                        value={num}
                        onChange={(e) => setNum(e.target.value)}
                        className="form-control"
                        type="text" id="contract"
                      />
                    </div>
                  </div>
                  <div className="col-md-8 col-lg-7">
                    <FieldsetType type={type} setType={setType} />
                  </div>
                  <div className="form-group col-md-1 col-lg-2">
                    <label>Курс</label>
                    <input
                      onChange={(e)=> setCourse(e.target.value)}
                      value={course}
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
                      value={institute}
                      onChange={(e)=> setInstitute(e.target.value)}
                      className="form-control text-truncate" id="institute">
                      <option value="">Выберите институт</option>
                      <option value="ИТ">ИТ</option>
                      <option value="ТХТ">ТХТ</option>
                      <option value="РТС">РТС</option>
                      <option value="ФТИ">ФТИ</option>
                    </select>
                  </div>
                  <div className="form-group col">
                    <label htmlFor="date_start">Дата
                    начала обучения
                    </label>
                    <input
                      value={dateStart}
                      onChange={(e)=> setDateStart(e.target.value)}
                      className="form-control"
                      id="date_start" type="date"
                    />
                  </div>
                  <div className="form-group col">
                    <label htmlFor="date_end">Дата
                      окончания обучения</label>
                    <input
                      value={dateEnd}
                      onChange={(e)=> setDateEnd(e.target.value)}
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
                      <option value="undefined">Выберите размер
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
                      <option value="">Выберите квартиру
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
                      <option value="">Выберите комнату
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

import React, { useState, useRef, useEffect } from 'react'
// для маршрутизации используется react-router-dom
import { Link } from 'react-router-dom'
// для стилизации используется react-bootstrap
import { Form, Button } from 'react-bootstrap'
// наши хуки
import { useLocalStorage, useBeforeUnload, UseIO } from 'hooks'

function Login(){

    const [useremail, setUseremail] = useState('');
    const [userpass, setUserpass] = useState('');
    const [error, setErrorMessage] = useState('');
    const linkRef = useRef(null)

    // обрабатываем изменение имени пользователя
    const handleChangeEmail = (e) => {
        setUseremail(e.target.value)
    }
    // обрабатываем изменение пароля пользователя
    const handleChangePass = (e) => {
        setUserpass(e.target.value)
    }
    // запрашиваем авторизацию
    const handleSubmit = (e) => {
        e.preventDefault()
        const res = UseIO('login', [useremail,userpass]);
        if(res){
            console.log(res);
        }
    }

    return (
        <Form
          className='mt-5 flex-center justify-center'
          style={{ maxWidth: '320px', margin: '0 auto' }}
          onSubmit={handleSubmit}
        >
            <Form.Group>
                <Form.Label>Email:</Form.Label>
                <Form.Control value={useremail} onChange={handleChangeEmail} />
            </Form.Group>
            <Form.Group className="mt-3">
                <Form.Label>Пароль:</Form.Label>
                <Form.Control type="password" value={userpass} onChange={handleChangePass} />
            </Form.Group>
            <Form.Group>
                <Button className="mt-4" variant="success" onClick={handleSubmit}>
                    Войти
                </Button>
            </Form.Group>
            <p>{error}</p>
        </Form>
      )
}

export {Login};
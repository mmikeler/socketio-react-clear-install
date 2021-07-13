import React, { useState, useRef, useEffect } from 'react'
// для маршрутизации используется react-router-dom
import { Link } from 'react-router-dom'
// для стилизации используется react-bootstrap
import { Form, Button } from 'react-bootstrap'
// наши хуки
import { useLocalStorage, useBeforeUnload, useIO } from 'hooks'

function Home(){

    const {username,userpass} = [];
    const linkRef = useRef(null);

    return (      
        <Button variant='success' as={Link} to={`/login`} ref={linkRef}>Войти</Button>
    )
}

export {Home};
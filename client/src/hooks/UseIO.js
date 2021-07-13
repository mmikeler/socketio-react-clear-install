import { useEffect, useRef, useState } from 'react'
// получаем класс IO
import io from 'socket.io-client'
import { nanoid } from 'nanoid'
// наши хуки
import { useLocalStorage, useBeforeUnload } from 'hooks'
// адрес сервера
const SERVER_URL = 'http://localhost:5000'
// Создаём сокет
const socket = io();

// Хук для работы с sockets
function UseIO(action,request){

    if(action === 'login'){
        return socket.emit('login', request);
    }

}
export {UseIO};
// создаем HTTP-сервер
const server = require('http').createServer()
// подключаем к серверу Socket.IO
const io = require('socket.io')(server, {
  cors: {
    origin: '*'
  }
})

const log = console.log

// Класс базы данных
const bdObj = require('./handlers/bd');
const BD = bdObj();

// данная функция выполняется при подключении каждого сокета (обычно, один клиент = один сокет)
const onConnection = (socket) => {
  // выводим сообщение о подключении пользователя
  log('User connected')

  // запрос авторизации
  socket.on('login', (request) => {
    // здесь отправляем запрос к API или БД и возвращаем результат на фронт
    // request = [login,pass]
    const result = BD.users.add(request); // заменить на обработку сервером
    console.log('RE: ' + result);
    if(result){
      socket.emit('loginResult', result);
    }
  })

  // запрос регистрации
  socket.on('registration', request => {
    // здесь отправляем запрос к API или БД и возвращаем результат на фронт
    // request = [email,pass]
    const result = true; // заменить на обработку сервером
    if(result){
      socket.emit('registrationResult', result);
    }
  })

  // обрабатываем отключение сокета-пользователя
  socket.on('disconnect', () => {
    // выводим сообщение
    log('User disconnected')
  })
}

// обрабатываем подключение
io.on('connection', onConnection)

// запускаем сервер
const PORT = process.env.PORT || 5000
server.listen(PORT, () => {
  console.log(`Server ready. Port: ${PORT}`)
})
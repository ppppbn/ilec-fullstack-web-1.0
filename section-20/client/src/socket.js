import Cookie from 'js-cookie';
import { io } from 'socket.io-client';

let socket;

function initConnection () {
  socket = io("http://localhost:3000", {
    query: {
      token: Cookie.get('token')
    }
  });

  console.log('socket after initialized', socket);
}

function getSocket () {
  return socket;
}

export {
  initConnection,
  getSocket
};
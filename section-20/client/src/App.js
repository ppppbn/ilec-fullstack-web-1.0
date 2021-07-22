import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import { GuardProvider, GuardedRoute } from 'react-router-guards';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Cookie from 'js-cookie';

export default function App(props) {
  function checkAuthenticate (to, from, next) {
    if (to.meta.requireAuth) {
      if (Cookie.get('token')) {
        next();
      } else {
        next.redirect('/login');
      }
    }

    return next();
  }

  return <BrowserRouter>
    <main>
      <GuardProvider guards={[checkAuthenticate]}>
        <Switch>
          <GuardedRoute exact path='/' meta={{requireAuth: true}}>
            <Home socket={props.socket}/>
          </GuardedRoute>
          <GuardedRoute path='/login'>
            <Login />
          </GuardedRoute>
          <GuardedRoute path='/register'>
            <Register />
          </GuardedRoute>
        </Switch>
      </GuardProvider>
    </main>
  </BrowserRouter>
}
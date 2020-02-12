import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { store } from '../store';
import { history } from '../history';
import { act } from 'react-dom/test-utils';
import { Register } from '../containers/register';
import { Login } from '../containers/Login';
import { requestRegister, requestLogin, requestLogout } from '../api/auth';

let container, accessToken;

const random = Math.random()
  .toString(36)
  .slice(-8);

const registerData = {
  payload: {
    user_id: random,
    user_name: random,
    email: `${random}@gmail.com`,
    password: random
  }
};

const loginData = {
  payload: {
    user_id: random,
    password: random
  }
};

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

jest.setTimeout(10000);

it('can render register, request register api', () => {
  act(() => {
    ReactDOM.render(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Register />
        </ConnectedRouter>
      </Provider>,
      container
    );
  });

  const button = container.querySelector('button');
  act(() => {
    button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });
  const errorMsg = container.querySelectorAll('.text-danger');
  expect(errorMsg.length).toEqual(4);

  return requestRegister(registerData).then(res => {
    accessToken = res.response.data.access_token;
    expect(res.response.statusText).toEqual('OK');
  });
});

it('request logout api', () => {
  return requestLogout(accessToken).then(res =>
    expect(res.response.statusText).toEqual('OK')
  );
});

it('can render login, request login api', () => {
  act(() => {
    ReactDOM.render(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Login />
        </ConnectedRouter>
      </Provider>,
      container
    );
  });

  const button = container.querySelector('button');
  act(() => {
    button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });
  const errorMsg = container.querySelectorAll('.text-danger');
  expect(errorMsg.length).toEqual(2);

  return requestLogin(loginData).then(res =>
    expect(res.response.statusText).toEqual('OK')
  );
});

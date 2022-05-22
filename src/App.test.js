import React from 'react';
import { screen, render } from '@testing-library/react';

import App from './App';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { UsersData } from './usersData';

describe('With React Testing Library', () => {
  const initialState = { value: UsersData };
  const mockStore = configureStore();
  let store;

  test('Shows 1st header', () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const headerElement = screen.getByText(/add a user/i);
    expect(headerElement).toBeInTheDocument();
  });

  test('Shows 2nd header', () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const headerElement = screen.getByText(/List of users/i);
    expect(headerElement).toBeInTheDocument();
  });

  test('Shows input Name', () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const inputNameElement = screen.getByTestId('name-input');
    expect(inputNameElement).toBeInTheDocument();
  });

  test('Shows input username', () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const inputNameElement = screen.getByTestId('username-input');
    expect(inputNameElement).toBeInTheDocument();
  });

  test('Shows add user button', () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const addButtonElement = screen.getByTestId('add-button');
    expect(addButtonElement).toBeInTheDocument();
  });

  test('Shows user name text', () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const NameList = screen.getAllByTestId('name-text');
    NameList.forEach(el => {
      expect(el).toBeInTheDocument();
    });
  });

  test('Shows new username input', () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const newUsernameList = screen.getAllByPlaceholderText(/New Username.../i);
    newUsernameList.forEach(el => {
      expect(el).toBeInTheDocument();
    });
  });

  test('Shows update button', () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const updateButtonList = screen.getAllByTestId("update-button");
    updateButtonList.forEach(el => {
      expect(el).toBeInTheDocument();
    });
  });

  test('Shows delete button', () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const deleteButtonList = screen.getAllByTestId("delete-button");
    deleteButtonList.forEach(el => {
      expect(el).toBeInTheDocument();
    });
  });
});

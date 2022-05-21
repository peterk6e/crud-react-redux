import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { UsersData } from './usersData';

describe('With React Testing Library', () => {
  const initialState = { value: UsersData };
  const mockStore = configureStore();
  let store;

  test('Shows Learn Chakra', () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const { getByText } = render(
      expect(getByText(/Learn Chakra/i)).toBeInTheDocument()
    );
  });
});

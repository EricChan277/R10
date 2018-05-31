import React, { Component } from 'react';

import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';

import store from './redux/store';
import client from './config/api';

import RootStackNavigator from './navigation/RootStackNavigator';

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <RootStackNavigator />
        </Provider>
      </ApolloProvider>
    );
  }
}

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    var config = {
      apiKey: 'AIzaSyBdd31mpYGRjK_y51tfl6jlL0ZIy0ObAbk',
      authDomain: 'manager-77bbc.firebaseapp.com',
      databaseURL: 'https://manager-77bbc.firebaseio.com',
      projectId: 'manager-77bbc',
      storageBucket: 'manager-77bbc.appspot.com',
      messagingSenderId: '467188323221'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;

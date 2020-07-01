import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {applyMiddleware, compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import allReducers from './js/allReducers';
import rootSaga from './js/rootSaga';
import AppNavigator from "./js/routes";

const sagaMiddleware = createSagaMiddleware();
let middlewares = compose(applyMiddleware(sagaMiddleware));
let store = createStore(allReducers(), middlewares);

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex:1 }}>
        <AppNavigator/>
      </SafeAreaView>
      </Provider>
  );
};

sagaMiddleware.run(rootSaga);

export default App;

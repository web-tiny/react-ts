import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from "react-redux";
// tslint:disable-next-line:ordered-imports
import { createStore } from "redux";
import Login from './containers/Login';
// import App from './App';
import './index.css';
import { enthusiasm } from "./reducers/index";
// import registerServiceWorker from './registerServiceWorker';
import { IStoreState } from "./types/index";

const store = createStore<IStoreState>(enthusiasm, {
    enthusiasmLevel: 1,
    languageName: 'Typescript'
})

ReactDOM.render(
  // <App />,
  <Provider store={store}>
    <Login/>
  </Provider>,
  document.getElementById('root') as HTMLElement
);

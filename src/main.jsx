import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap-icons/font/bootstrap-icons.css'
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './features/searchSlice';
import savedReducer from './features/savedSlice'
import { Provider } from 'react-redux';

const store = configureStore({
  reducer : {
    filter : filterReducer,
    saved : savedReducer,
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <Router basename='/recruitment-solutions'>
        <App/>
    </Router>
    </Provider>
  </React.StrictMode>,
)

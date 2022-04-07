import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from "@apollo/client";
const link = new createHttpLink({
  uri: "https://plantbaganbackend.herokuapp.com/api",
  credentials: "include",
  fetchOptions: {
    mode: "cors",
  },
  withCredentials: true,
});
const client = new ApolloClient({
  link, 
  cache: new InMemoryCache()
});

ReactDOM.render(


  <BrowserRouter>
   <React.StrictMode>
   <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
  </React.StrictMode>,
  </BrowserRouter>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

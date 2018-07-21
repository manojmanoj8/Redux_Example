import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PostApp from "./Components/PostApp";
import PostForm from "./Components/PostForm";
import store from "../src/Store/Store";
const store=createStore(()=>[],{},applyMiddleware);
class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <PostForm/>
        <PostApp/>
      </div>
     </Provider> 
    );
  }
}

export default App;

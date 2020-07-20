import React, { Component } from 'react';
import Sub from "./components/Subject.js";
import Toc from "./components/Toc.js";
import Content from "./components/Content.js";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sub title="WEB" sub="my first react and git"></Sub>
        <Sub title="React" sub="react"></Sub>
        <Sub title="Git" sub="git"></Sub>
        <Toc></Toc>
        <Content title="HTML" desc="Hello World"></Content>
      </div>
    );
  }
}

export default App;

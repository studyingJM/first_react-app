import React, { Component } from 'react';
import './App.css';

class Subject extends Component {
  render() {
    return (
      <header>
        <h1>{ this.props.title }</h1>
        <p>{ this.props.sub }</p>
      </header>
    );
  }
}

class Toc extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><a href="1.html">HTML</a></li>
          <li><a href="2.html">CSS</a></li>
          <li><a href="3.html">JavaScript</a></li>
        </ul>
      </nav>
    );
  }
}

class Content extends Component {
  render() {
    return (
      <article>
        <h2>{ this.props.title }</h2>
        <p>{ this.props.desc }</p>
      </article>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject title="WEB" sub="my first react and git"></Subject>
        <Subject title="React" sub="react"></Subject>
        <Subject title="Git" sub="git"></Subject>
        <Toc></Toc>
        <Content title="HTML" desc="Hello World"></Content>
      </div>
    );
  }
}

export default App;

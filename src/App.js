import React, { Component } from 'react';
import Sub from "./components/Subject.js";
import Toc from "./components/Toc.js";
import Content from "./components/Content.js";
import './App.css';

class App extends Component {
  //stat값을 초기화 시켜주는 작업.
  /*
    불필요한 정보를 노출시키지 않게하여 가독성을 높임?
    class가 내부적으로 사용할 상태는 state형태를 이용.
    상위 컴포넌트의 state값을 하위 컴포넌트의 props로 전달.
  */
  constructor(props) {
    super(props);
    this.state = {
      subject:{title:"web", sub:"My first react and git"},
      contents:[
        {id:1,title:"HTML", desc:"HTML is HyperText ..."},
        {id:2,title:"CSS", desc:"CSS is Design"},
        {id:3,title:"JavaScript", desc:"JavaScript is for interactive"}
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <Sub 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}>
        </Sub>
        <Sub title="React" sub="react"></Sub>
        <Sub title="Git" sub="git"></Sub>
        <Toc data={this.state.contents}></Toc>
        <Content title="HTML" desc="Hello World"></Content>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Sub from "./components/Subject.js";
import Toc from "./components/Toc.js";
import Content from "./components/Content.js";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode:"read",
      subject:{title:"Web", sub:"My first react and git"},
      welcome:{title:"Welcome",desc:"Hello, React!!"},
      contents:[
        {id:1,title:"HTML", desc:"HTML is HyperText ..."},
        {id:2,title:"CSS", desc:"CSS is Design"},
        {id:3,title:"JavaScript", desc:"JavaScript is for interactive"}
      ]
    }
  }

  render() {
    console.log('App render');
    var _title, _desc = null;
    if(this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }else if(this.state.mdoe === 'read') {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }

    //bind : App에 있는 객체를 함수로 가져와 사용할수있게함.
    return (
      <div className="App">
        {/* <Sub 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}>
        </Sub> */}
        <header>
          <h1><a href="/" onClick={function(e) {
            console.log(e);
            e.preventDefault();
            // this.state.mode = 'welcome'; 동적으로 수정할때 이렇게 쓰면 안된다.
            this.setState({
              mode:'welcome'
            });
          }.bind(this)}>{ this.state.subject.title }</a></h1>
          <p>{ this.state.subject.sub }</p>
        </header>
        <Sub title="React" sub="react"></Sub>
        <Sub title="Git" sub="git"></Sub>
        <Toc data={this.state.contents}></Toc>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;

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
      selected_content_id:2,
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
    }else if(this.state.mode === 'read') {
      var i = 0;
      while(i < this.state.contents.length) {
        var data  = this.state.contents[i];
        if(data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
    }

    //bind() : App에 있는 객체를 function()<함수>로 가져와 사용할수있게함.
    return (
      <div className="App">
        <Sub 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          //이벤트 호출 함수.
          onChangePage = {
            //props
            function() {
              alert("Sub Change");
              if(this.state.mode === 'read') {
                this.setState({mode:'welcome'});
              }else {
                this.setState({mode:'read'});
              }
            }.bind(this)
          }
        >
        </Sub>
        <Sub title="React" sub="react"></Sub>
        <Sub title="Git" sub="git"></Sub>
        <Toc onChangePage = {
          function(id) {
            alert('Toc Change');
            this.setState({mode:'read',selected_content_id:Number(id)});
          }.bind(this)} 
          data={this.state.contents}
        />
        <Content title={_title} desc={_desc}/>
      </div>
    );
  }
}

export default App;

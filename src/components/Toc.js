import React, { Component } from 'react';

class Toc extends Component {
    render() {
      console.log('Toc render');
      var list = [];
      var data = this.props.data
      var i = 0;
      while(i < data.length) {
      list.push(
        <li key={data[i].id}>
          <a 
            href = {"/content/"+data[i].id}
            // data-id = {data[i].id} //속성 target.dataset
            //속성을 이용하지 않는 방법.
            onClick = {function(id,e) {
              e.preventDefault();
              //App.js에 onCHangePage() 함수 실행.
              this.props.onChangePage(id);
            }.bind(this,data[i].id)}
            >
            {data[i].title}
          </a>
        </li>);
        i = i + 1;
      }

      return (
        <nav>
          <ul>
            {list}
          </ul>
        </nav>
      );
    }
}

export default Toc;
import React, { Component } from 'react'; //React는 필수.

class Toc extends Component {
    render() {
      var list = [];
      var data = this.props.data
      var i = 0;
      while(i < data.length) {
      //자동 생성 항목들은 key라는 고유의 식별자가 필요하다.
      list.push(<li key={data[i].id}><a href={"/content/"+data[i].id}>{data[i].title}</a></li>);
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
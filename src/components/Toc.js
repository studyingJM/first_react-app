import React, { Component } from 'react';

class Toc extends Component {
    render() {
      console.log('Toc render');
      var list = [];
      var data = this.props.data
      var i = 0;
      while(i < data.length) {
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
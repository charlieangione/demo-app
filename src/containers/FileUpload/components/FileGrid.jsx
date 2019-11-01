import React, { Component } from 'react';
import File from './File'
import { Link } from 'react-router-dom'


class FileGrid extends Component {
  render() {
    return (
      <div>
      <Link to='/upload' ></Link>                              
      <div>
      {console.log(this.props)}
        {this.props.posts.sort(function(x, y){return y.id - x.id;}).map((post, i) => {
          return <Photo key={i} post={post} i={i} {...this.props}/>
        })}
      </div>
      </div>
    );
  }
}

export default FileGrid;
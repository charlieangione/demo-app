import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class File extends Component {

  render() {
    console.log(this.props)
    const { post, i } = this.props; 
    return (
        <figure>
        <div>
            <img src={post.fileLink} alt={post.fileDescription} />
        </div>
        <figcaption>
          <p>{post.fileDescription}</p>
          <div className="btn">
          <button className="btn" onClick={() => {
            this.props.history.push('/trash')
            this.props.removeFile(i)
          }}>Remove</button>
          </div>
        </figcaption>
      </figure>
    );
  }
}

export default File;
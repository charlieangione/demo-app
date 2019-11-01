import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import serializeForm from 'form-serialize';

class SingleFile extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const values = serializeForm(e.target, { hash: true })	
    if (values["fileLink"] && values["fileDescription"]) {
    values.id = Number(new Date())
    this.props.addFile(values.id,values.fileLink,values.fileDescription)
    this.props.history.push('/my-documents')
    }
    }
  render() {
    return (
      <div>
<div className="form" onSubmit={this.handleSubmit}>
<form className="form">
  <input name="fileLink" placeholder="File Link"/>
  <input name="fileDescription" placeholder="File Description"/>
  <button>Upload</button>
</form>
</div>
    </div>
    );
  }
}

export default SingleFile;
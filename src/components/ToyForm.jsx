import React, { Component } from 'react';

class ToyForm extends Component {

  state ={
      name: '',
      image: ''
  }

  handleNameChange = (event) =>{
    this.setState({name: event.target.value})
  }

  handleImageChange = (event) =>{
    this.setState({image: event.target.value})
  }

  render() {
    return (
      <div className="container">
        <form 
          className="add-toy-form"
          onSubmit={() => this.props.addToy(this.state.name, this.state.image)} 
        >
          <h3>Create a toy!</h3>
          <input 
            type="text" 
            name="name" 
            placeholder="Enter a toy's name..." 
            className="input-text"
            onChange={(event) => this.handleNameChange(event)}
            />
          <br/>
          <input 
            type="text" 
            name="image" 
            placeholder="Enter a toy's image URL..." 
            className="input-text"
            onChange={(event) => this.handleImageChange(event)}
            />
          <br/>
          <input 
            type="submit" 
            name="submit" 
            value="Create New Toy" 
            className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;

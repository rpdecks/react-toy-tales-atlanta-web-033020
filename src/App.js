import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

import data from './data'


class App extends React.Component{

  state = {
    display: false,
    toys: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/toys')
    .then(res => res.json())
    .then(res => this.setState({toys: res}))
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  deleteToy = (toyId) => {
    const delObj = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetch(`http://localhost:3000/toys/${toyId}`, delObj)
    .then(res => res.json())
    .then(res => {
      this.setState({toys: this.state.toys.filter(toy => toy.id != toyId)})
    })
  }

  likeToy = (toyId, likes) => {
    const likeObj = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({likes: likes += 1})
    }
    fetch(`http://localhost:3000/toys/${toyId}`, likeObj)
    .then(res => res.json())
    .then(toy => {
      let ToysCopy = [...this.state.toys]
      let index = ToysCopy.findIndex((toy) => toy.id === toyId)
      ToysCopy.splice(index, 1, toy)
      this.setState({toys: ToysCopy})
      })
  }

  render() {
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toys={this.state.toys} likeToy={this.likeToy} deleteToy={this.deleteToy}/>
      </>
    )
  }
}

export default App;

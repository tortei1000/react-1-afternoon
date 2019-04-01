import React, { Component } from 'react';

class AddToList extends Component {
  
  constructor(){
    super();

    this.state = {
      list: [],
      userInput: ""
    }
  }
  handleChange(val){
    this.setState({userInput: val})
  }

  addTo(userInput){
    let arr = [...this.state.list]
    arr.push(userInput)
    
    this.setState({list: arr})
  }

  removeItem(userInput){
    let arr2 = [...this.state.list]
    arr2.splice(arr2.length -1, 1)
    
    this.setState({list: arr2})
  }
  
  render(){
    
    return (
      
      <div className="puzzleBox">
        <h4 > Add to the List </h4>
          <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }/ >
          <button className="confirmationButton" onClick={ () => { this.addTo(this.state.userInput) }} > Add Item </button>
          <button className="confirmationButton" onClick={ () => { this.removeItem(this.state.userInput) }} > Remove last item </button>
          <span className="filterObjectRB">{ this.state.list.map(elem => <li>{elem}</li>)}</span>
          
        
      </div>
    )
  }
}

export default AddToList
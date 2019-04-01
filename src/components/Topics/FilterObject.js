import React, { Component } from 'react';

class FilterObject extends Component {
  
  constructor(){
    super()

    this.state = {
      friends : [
        {
          name: "Joey",
          age: 32,
          job: "actor",
          died: true
        },
        {
          name: "Monica",
          age: 34,
          job: "chef"
        },
        {
          name: "Ross",
          age: 36,
          job: "professor"
        }
      ],
      userInput : "",
      filterArray : []

    }
  }
  
  handleChange(val){
    this.setState({userInput: val})
  }

  assignFilter(userInput){
    let friends = this.state.friends
    let filtered = []
    
    for(let i = 0; i < friends.length; i++){
      if(friends[i].hasOwnProperty(this.state.userInput) ) {
        filtered.push(friends[i])
      }
    }
    
    this.setState({filterArray : filtered})
  }


  render(){
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">Original: { JSON.stringify(this.state.friends, null, 10) }</span>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }/>
        <button className="confirmationButton" onClick={ () => { this.assignFilter(this.state.userInput) }}> Filter </button>
        <span className="resultsBox filterObjectRB">Filtered :{ JSON.stringify(this.state.filterArray, null, 10) }</span>
      </div>
    )
  }
}

export default FilterObject
import React, { Component } from 'react';

class FilterString extends Component {
  constructor(){
    super();

   this.state = {
    strings : ["Moon", "Sun", "Stars", "Sky"],
    userInput: "",
    filteredArray : []
    }
  }
    handleChange(val) {
      this.setState({userInput: val})
    }

    assignFilter(userInput){
      let strings = this.state.strings
      let filtered = []
      
    
      for(let i = 0; i < strings.length; i++){
        if(strings[i].includes(userInput) ) {
         filtered.push(strings[i])
       } 
       
      }
    
      this.setState({filteredArray : filtered})
    }
  

    render() {
      return (
       <div className="puzzleBox filterStringPB">
          <h4>Filter String</h4>
          <span className="puzzleText"> Strings :{ JSON.stringify(this.state.strings, null, 10) }</span>
          <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }/>
          <button className="confirmationButton" onClick={ () => { this.assignFilter(this.state.userInput) }}> Filter </button>
          <span className="resultsBox filterStringRB"> Filtered Strings: { JSON.stringify(this.state.filteredArray, null, 10) }</span>
        </div>
      )
    }
}
 

export default FilterString
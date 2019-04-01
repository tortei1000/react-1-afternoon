import React, { Component } from 'react';

class Palindrome extends Component {
  
  constructor(){
    super();

    this.state = {
      palindrome: "",
      userInput: ""
    }
  }
  handleChange(val) {
    this.setState({userInput: val})
  }
  palindromeMaker(userInput){
    
      var lowRegStr = userInput
      var reverseStr = userInput
      reverseStr = reverseStr.split('')
      reverseStr = reverseStr.reverse()
      reverseStr = reverseStr.join('')
      
      if(reverseStr === lowRegStr){        
        this.setState({palindrome : "true"})
      }else{
        this.setState({palindrome : "false"})
      }
  }
  
  
  
  render(){
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }/>
        <button className="confirmationButton" onClick={ () => { this.palindromeMaker(this.state.userInput) }}>Check</button>
        <span className="resultsBox">{ this.state.palindrome }</span>
      </div>
    )
  }
}

export default Palindrome
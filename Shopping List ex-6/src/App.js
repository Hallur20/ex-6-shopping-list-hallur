import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor(){
		super();
		this.state = {person: "this will be changed"};
		
		this.handleClick = this.handleClick.bind(this);
		this.giveString = this.giveString.bind(this);
		
	}
  handleClick(event) {

    this.setState({person: event.target.value});
  }
  giveString(){
	  return "hello";
  }

  render() {
    return (
	<div>
<input onChange={this.handleClick}/>
<p>{this.state.person}</p>
	</div>
    );
  }
}

export default App;

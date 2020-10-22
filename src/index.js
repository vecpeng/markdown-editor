import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Container extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: []
    }
    this.handleChildInput = this.handleChildInput.bind(this)
  }
  handleChildInput(userInput) {
    this.setState({
      value: userInput
    })
    console.log(userInput)
  }
  render() {
    return(
      <div className = "container">
        <UserInput handleChildInput = {this.handleChildInput}/>
        <UserOutput value = {this.state.value}/>
      </div>
    )
  }
}
class UserInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: []
    }
    this.handleInput = this.handleInput.bind(this)
  }
  handleInput(e) {
    console.log("ok")
    console.log(this.props)
    const {handleChildInput} = this.props
    console.log(handleChildInput)
    let userInput = document.getElementById("user-input")
    console.log(userInput.textContent)
    let handleInput = [userInput.innerHTML.split("<div>")[0]]
    console.log(userInput)
    Array.from(userInput.childNodes).forEach(childNode => {
      if(childNode.nodeName === 'DIV') {
        handleInput.push(childNode.textContent)
      }
    })
    handleChildInput(handleInput)
  }
  handleKeyDown(e) {
    if(e.keyCode === 13) {
      this.setState({
        value: this.state.value + '\n'
      })
    }
  }
  render() {
    return (
      <div 
      contentEditable = "true"
      spellCheck = "false"
      className = "user-input"
      id = "user-input"
      onInput = {this.handleInput}
      >
      </div>
    )
  }
}

class UserOutput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ""
    }
  }
  render() {
    console.log(this.props)
    const output = this.props.value.map((value,index) => {
      // if(value.slice(0,1) ===  "###") {
      //   return <h3 key={index}>{value.slice(3)}</h3>
      // }
      // return value
      let num = 0
      for(let i = 0; i < 6; i++) {
        if(value[i] === '#'){
          num++
        } else {
          break
        }
      }
      const Tag = "h" + num
      return <Tag >{value.slice(num)}</Tag>
    })
    return (
    <div>{output}</div>
    )
  }
}
ReactDOM.render(<Container />, document.getElementById("root"))
/* eslint-disable eqeqeq */
import React, { createElement } from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [],
    };
    this.handleChildInput = this.handleChildInput.bind(this);
  }
  handleChildInput(userInput) {
    this.setState({
      value: userInput,
    });
    console.log(userInput);
  }
  render() {
    return (
      <div className="container">
        <UserInput handleChildInput={this.handleChildInput} />
        <UserOutput value={this.state.value} />
      </div>
    );
  }
}

class UserInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [],
      unorderedList: false,
      orderedList: false,
    };
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(e) {
    const { handleChildInput } = this.props;
    let userInput = document.getElementById("user-input");
    let handleInput = [];
    let isUnorderedList = false;

    Array.from(userInput.childNodes).forEach((childNode) => {
      let textContent = childNode.textContent;
      if (textContent.slice(0, 2) == "- ") {
        console.log("- ");
        isUnorderedList = true;
        handleInput.push(textContent);
      } else {
        if (isUnorderedList == true) {
          console.log("li");
          handleInput.push(`- ${textContent}`);
        } else {
          console.log("noli");
          handleInput.push(textContent);
        }
      }
    });
    userInput.innerHTML = "";
    console.log(handleInput);
    handleInput.forEach((item) => {
      let itemNode = document.createElement("div");
      itemNode.textContent = item;
      userInput.appendChild(itemNode);
    });
    let lastNode = document.createElement("span");
    lastNode.textContent = "fdsfsf";
    userInput.appendChild(lastNode);
    window.getSelection().collapse(lastNode, 0);

    userInput.removeChild(lastNode);
    isUnorderedList = false;
    handleChildInput(handleInput);
  }
  handleKeyDown(e) {
    if (e.keyCode === 13) {
      if (this.state.unorderedList === true) {
      }
    }
  }
  render() {
    return (
      <div
        contentEditable="true"
        spellCheck="false"
        className="user-input"
        id="user-input"
        onInput={this.handleInput}
      ></div>
    );
  }
}

class UserOutput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }
  render() {
    console.log(this.props);
    const output = this.props.value.map((value, index) => {
      // handle title
      let num = 0;
      for (let i = 0; i < 6; i++) {
        if (value[i] === "#") {
          num++;
        } else {
          break;
        }
      }
      if (value[0] === "#") {
        const Tag = `h${num}`;
        return <Tag>{value.slice(num)}</Tag>;
      }

      //handle unordered list
      if (value.slice(0, 2) == "- ") {
        return <li>{value.slice(2)}</li>;
      }

      return <div className="normal-value">{value}</div>;
    });
    return <div className="output-container">{output}</div>;
  }
}
ReactDOM.render(<Container />, document.getElementById("root"));

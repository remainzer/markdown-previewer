import './App.css';
import React from 'react';
import { marked } from 'marked';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange (event) {
    this.setState ({
      input: event.target.value
    })
  }
  componentDidMount () {
    const example = "# This is an h1 element\n## This is an h2 element\nThis is a [link](https://www.freecodecamp.org)\n>I'm a block quote.\n```\n//I am a comment inside a code block\nconsole.log('hello world')\n```\nThis is inline code `<code></code>`\n- I am a list  \n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)  \nThis is how to use **images**"
    marked.setOptions({
      breaks: true
    });
    this.setState ({
      input: example,
    })
  }
  render () {
      return (
        <div className="App">
          <div className="edi-wrapper">
            
            <h2>Editor</h2>
            <textarea id="editor" placeholder="Type something here..." onChange={this.handleInputChange} value={this.state.input}></textarea>
          
          </div>
          
          <div id="pre-wrapper">

            <h2 id="preview-title">Previewer</h2>
            <div id="preview" dangerouslySetInnerHTML={{__html: marked(this.state.input)}}></div>

          </div>

        </div>
    );
  }
}
export default App;
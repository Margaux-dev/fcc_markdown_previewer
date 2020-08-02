class Editor extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            editor: {content: `# FreeCodeCamp

## Front-End Libraries Certification
### Project: Markdown Previewer
  
Here, you can find **inline code** \`<div></div>\` or **multiline-code**:

\`\`\`
function example(line, code) {
  if (code === line) {
    return line;
  }
}
\`\`\`

You can learn to use React at [freeCodeCamp](https://www.freecodecamp.com).

> Here is a little block quote. I have a cat, his name is Ficelle and he's very cute. Have you seen him ? 

Maybe you need a list?
  - Here is
  - a bulleted
  - one.

Let's finish with the React Logo :
![React Logo w/ Text](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png)
`}
        };
        this.onChange = this.onChange.bind(this);
    }

    rawMarkup (raw) {
        const rawMarkup = marked(raw, {sanitize: true});
        return {__html: rawMarkup};
    }

    onChange (event) {
        const change = this.state.editor;
        change.content = event.target.value;
        this.setState({editor: change});
    }

    render() {
        return(
            <div id="app">
                    <div id="editor-div">
                        <h2 id="editor-title">Editor</h2>
                        <textarea id="editor" onChange={this.onChange} value={this.state.editor.content}></textarea>
                    </div>
                    <div id="preview-div">
                        <h2 id="preview-title">Preview</h2>
                        <div id="preview" dangerouslySetInnerHTML={this.rawMarkup(this.state.editor.content)}></div>
                    </div>
            </div>
        )
    }
};

ReactDOM.render(<Editor/>, document.getElementById("root"));
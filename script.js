const defaultText = `# This is a Markdown previewer!

## enter github style markdown 
### And receive html output

\`\`\`
// this is a function:

function square(number) {
  return number * number;
}
\`\`\`
  
**bold** text
_italic_ text
**_both!_**
~~crossed out~~.

[link](https://www.freecodecamp.com)
> Block Quotes!


- \`<ul></ul>\`
  - with bullets.
     - indented.


1. \`<ol></ol>\`
1. once started  
1. use whatever 
- you
* want

embedded images:

![CodePen Logo](https://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-Black-Large.png)
`;


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: defaultText
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({
            inputValue: event.target.value
        });
    }
    render() {
        const markdown = marked.parse(this.state.inputValue,{breaks:true} )
        return (
            <div className='container-fluid py-3'>
                <h2 className='text-center'>Your Markdown</h2>
                <div className='row justify-content-end'>
                    <div className='col-6'>
                    <h6 className='text-center'>Original Markdown </h6> 
                        <textarea className='form-control' id='editor' onChange={this.handleChange} value={this.state.inputValue}></textarea>
                    </div>
                    <div className='col-6' >
                       <h6 className='text-center'>Preview </h6> 
                       <div id='preview' dangerouslySetInnerHTML={{__html:markdown}}></div>
                    </div>
                </div>
                
            </div>
        );
    }
};





ReactDOM.render(<App />, document.getElementById('root'))


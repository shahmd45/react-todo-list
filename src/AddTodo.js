import React from 'react';

class AddTodo extends React.Component{
    state = {
        content : ''
    }

    handleChange = (e) => {
        this.setState({
            content : e.target.value
        });
    }

//     validateFn = (inputText) =>{
//         let regex = /^(?=.*[0-9])(?=.*[a-zA-Z)(?=.*[a-zA-Z0-9]+)$/;

//         if(inputText.match(regex)){
//             inputText.replace(regex, '')
//             return inputText
//         }
//       else {
//           alert("hi")
//       }
// }


    handleSubmit = (e) => {  
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content : ''
        });
    }

    render () {
        return (
            <div>
                <form onSubmit={ this.handleSubmit } >
                    <label> Add new Todo: </label>
                    <input type="text" onChange={ this.handleChange } value={ this.state.content } />
                </form>
            </div>
        );
    }
} 

export default AddTodo;
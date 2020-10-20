import React from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends React.Component {

  state = {
      todos: [
        { id : 1, content : 'Buy Some Milk'},
        { id : 2, content : ' Learn and type code'}
      ]
  } 

 deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo =>{
      return todo.id !== id
    });

    this.setState({
      todos
    })
 }
 
 addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos , todo]
    this.setState ({
      todos
    });
 }

 render() {
    return (
        <div className="todo-app container">
            <h2 className = "center blue-text"> Todo's </h2>
            <Todos todos = { this.state.todos } deleteTodo = { this.deleteTodo} />
            <br/> <br/> <br/>
            <AddTodo addTodo = {this.addTodo} />
        </div>
      );
   }
}

export default App;

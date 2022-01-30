import React from 'react';
import TodoList from './TodoList';
import TodoInput from './TodoInput';
// import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.resetTodo = this.resetTodo.bind(this);
  }
  
  resetTodo() {
    this.setState({
      tasks: [],
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.resetTodo}>リセット</button>
        <TodoInput addTask={this.props.addTask} />
        <TodoList tasks={this.props.tasks} /> 
      </div>
    );  
  }
}

export default App;

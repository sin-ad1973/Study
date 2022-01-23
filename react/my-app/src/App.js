import React from 'react';
import TodoList from './TodoList';
import TodoInput from './TodoInput';
// import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    // state
    this.state = {
      tasks: [
        {
          title: 'test',
          id: 0,
        }
      ],
      unigueId: 1,
    };

    this.addTodo = this.addTodo.bind(this);
    this.resetTodo = this.resetTodo.bind(this);
  }

  addTodo(title) {
    const { tasks, unigueId } = this.state;
    tasks.push({
      title,
      id: this.state.unigueId,
    });

    this.setState({
      tasks,
      unigueId: unigueId + 1,
    });
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
        <TodoInput addTodo={this.addTodo} />
        <TodoList tasks={this.state.tasks} /> 
      </div>
    );  
  }
}

export default App;

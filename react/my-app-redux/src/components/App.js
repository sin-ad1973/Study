import React from 'react';
import TodoList from './TodoList';
import TodoInput from './TodoInput';
import '../App.css';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="App">
        <button onClick={this.props.resetTask}>リセット</button>
        <button onClick={this.props.asyncMethod}>test</button>
        <TodoInput inputTask={this.props.inputTask} addTask={this.props.addTask} task={this.props.task} />
        <TodoList tasks={this.props.tasks} /> 
      </div>
    );  
  }
}

export default App;

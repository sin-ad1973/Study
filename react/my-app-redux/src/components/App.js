import React from 'react';
import TodoList from './TodoList';
import TodoInput from './TodoInput';
import { Routes, Route, Link } from 'react-router-dom';
import '../App.css';
import Page1 from './Page1';
import Page2 from './Page2';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <button onClick={this.props.resetTask}>リセット</button>
        <button onClick={this.props.asyncMethod}>非同期アクション</button>
        <TodoInput inputTask={this.props.inputTask} addTask={this.props.addTask} task={this.props.task} />
        <TodoList tasks={this.props.tasks} />
        <Link to="/page1"><button>page1へ</button></Link>
        <Link to="/page2"><button>page2へ</button></Link>
        <Routes>
          <Route path="/" element={<Page1/>} />
          <Route path="/page1" element={<Page1/>} />
          <Route path="/page2" element={<Page2/>} />
        </Routes>
      </div>
    );  
  }
}

export default App;

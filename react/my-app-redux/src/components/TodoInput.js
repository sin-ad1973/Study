import React from "react";

class TodoInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange(e) {
        this.props.inputTask(e.target.value);
    }
    handleClick() {
        this.props.addTask();
    }
    render() {
        return (
            <div>
                <input placeholder='TODOのタイトルを入力してください' onChange={this.handleChange} value={this.props.task} />
                <button onClick={this.handleClick}>Todo登録</button>
            </div>
        );
    }
}

export default TodoInput
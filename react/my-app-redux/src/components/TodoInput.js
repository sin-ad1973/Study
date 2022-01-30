import React from "react";

class TodoInput extends React.Component {
    constructor(props) {
        super(props);
        
        // state
        this.state = {
            inputValue: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange(e) {
        this.setState(
            {
                inputValue: e.target.value,
            }
        )
    }
    handleClick() {
        this.props.addTask(this.state.inputValue);
    }
    render() {
        return (
            <div>
                <input placeholder='TODOのタイトルを入力してください' onChange={this.handleChange}/>
                <button onClick={this.handleClick}>Todo登録</button>
            </div>
        );
    }
}

export default TodoInput
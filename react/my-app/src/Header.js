import React from 'react';

class Header extends React.Component {
    constructor() {
        super();
        this.title = 'React学習'
    }
    render() {
        return (
            <header className="title">{this.title}</header>
        )
    }
}

export default Header;

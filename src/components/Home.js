import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false,
        };

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            toggle: !this.state.toggle,
        })
    }

    render() {
        return(
            <div>
                <h5 className="home">Home Content</h5>
            </div>
        )
    }
}

export default Home;
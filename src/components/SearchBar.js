import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/fontawesome-free-solid';
import PropTypes from 'prop-types';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: false
        };
        this.displayInput = this.displayInput.bind(this);
    }

    displayInput(e) {
        e.preventDefault();
        this.setState({
            display: !this.state.display,
        })
    }

    render() {
        return(
            <Form inline>
                <input id="searchbar"
                       className={this.state.display ? "form-control mr-sm-2 display" : "form-control mr-sm-2"}
                       type="search" aria-label="Search"/>
                <button onClick={this.displayInput} className="btn my-2 my-sm-0">
                    <FontAwesomeIcon className="search" icon={faSearch}/>
                </button>
            </Form>
        )
    }
}
    export default SearchBar;

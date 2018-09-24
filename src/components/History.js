import {Component} from "react";
import React from "react";
import PropTypes from 'prop-types';

class History extends Component {
    render(){
        return(
            <div>
                <h5 className="text-left">{this.props.title}</h5>
                <hr/>
                <p>{this.props.body}</p>
            </div>
        )
    }
}

export default History;

History.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
};
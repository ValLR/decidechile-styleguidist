import {Component} from "react";
import React from "react";
import PropTypes from 'prop-types';

class Team extends Component {
    render(){
        return(
            <div>
                <h5 className="text-left">{this.props.title}</h5>
                <hr/>

            </div>
        )
    }
}

export default Team;

Team.propTypes = {
    title: PropTypes.string,
    members: PropTypes.array,
};
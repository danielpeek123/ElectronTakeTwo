// @flow
import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Counter.scss';
import TextField from './sharedComponents/TextField';
import HandAugerTable from './HandAugerTable';

function cleanString(dirtyValue) {
    return dirtyValue.replace(/[^0-9.]/g, "");
}

class HandAugerPage extends Component {
    constructor(props){
        super(props);

        this.state = {
            depth: 0,
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const value = parseFloat(cleanString(event.target.value));
        if (typeof value === 'number') {
            this.setState({
                depth: value,
            });
        }
    }

    render() {
        return (
            <div>
                <input 
                    type="value" 
                    onChange={this.handleChange}
                />
                <HandAugerTable depth={this.state.depth} />
            </div>
        )
    }
}

export default HandAugerPage;
// @flow
import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/Counter.scss';

class TextField extends Component {
    constructor(props){
        super(props);

        this.state = {
            inError: true,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleChange() {
        debugger;
    }

    handleBlur() {
        debugger;
    }

    render() {

        const inErrorStyle = {
            borderColor: 'red',
        }

        return (
            <div>
                <input 
                    value={this.props.value}
                    onChange={this.handleChange}
                    style={this.state.inError ? inErrorStyle : ''}
                />
            </div>
        );
    }
}

TextField.PropTypes = {
    value: PropTypes.string,
}

export default TextField;

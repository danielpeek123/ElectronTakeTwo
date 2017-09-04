// @flow
import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Counter.scss';
import TextField from './sharedComponents/TextField';

class HandAugerTable extends Component {
    constructor(props){
        super(props);

        this.generateRow = this.generateRow.bind(this);
        this.generateDepthArray = this.generateDepthArray.bind(this);
    }

    generateDepthArray() {
        let currentDepth = 0;
        let depthArray = [];
        while (currentDepth <= this.props.depth) {
            depthArray = [...depthArray, currentDepth];
            currentDepth = parseFloat((Math.round((currentDepth + 0.1) * 10)/10).toFixed(1))
        }
        return depthArray;
    }

    generateRow() {
      return (<tbody> 
          {this.generateDepthArray().map((depthIncrements) =>                 
            <tr><td>{depthIncrements}</td>
            <td>Test Value</td>
            <td>Test Value</td></tr>)}
      </tbody>);
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Depth</th>
                            <th>Shearvane</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    {this.generateRow()}
                </table>
            </div>
        )
    }
}

HandAugerTable.PropTypes = {
    depth: PropTypes.number,
}

export default HandAugerTable;
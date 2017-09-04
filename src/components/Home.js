// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Home.scss';
import {Treebeard} from 'react-treebeard';
import HandAugerPage from './HandAugerPage';

const data = {
    name: 'root',
    toggled: true,
    children: [
        {
            name: 'parent',
            children: [
                { name: 'child1' },
                { name: 'child2' }
            ]
        },
        {
            name: 'loading parent',
            loading: true,
            children: []
        },
        {
            name: 'parent',
            children: [
                {
                    name: 'nested parent',
                    children: [
                        { name: 'nested child 1' },
                        { name: 'nested child 2' }
                    ]
                }
            ]
        }
    ]
};


export default class Home extends Component {
 constructor(props){
        super(props);
        this.state = {};
        this.onToggle = this.onToggle.bind(this);
    }
    onToggle(node, toggled){
        if(this.state.cursor){this.state.cursor.active = false;}
        node.active = true;
        if(node.children){ node.toggled = toggled; }
        this.setState({ cursor: node });
    }
    render(){
        return (
            <div className={styles['container']}>
                <div className={styles['side-bar-container']}>
                </div>
                <div className={styles['tree-view-container']}>
                        <div className={styles['tree-view']}>
                            <input type='value' />
                            <Treebeard
                                data={data}
                                onToggle={this.onToggle}
                            />
                        </div>
                </div>
                <div className={styles['render-window-container']}>   
                    <HandAugerPage />                
                </div>
            </div>    
        );
    }
}
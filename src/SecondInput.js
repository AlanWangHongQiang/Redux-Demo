import React, { Component } from 'react';
import store from './store'
import {changeSecondInputAction} from './store/actionCreators'
import { Input, Button, List } from 'antd'
class SecondInput extends Component {
    constructor(props) {
        super(props);
        this.stateChange = this.stateChange.bind(this)
        this.state = store.getState()
        store.subscribe(this.stateChange)
    }
    changeInput(e){
        
        const action = changeSecondInputAction(e.target.value)
        store.dispatch(action)
    }
    stateChange(){
        
        this.setState(store.getState())
        console.log(this.state)
    }
    render() { 
        return ( 
        <Input 
        value={this.state.secondInput.secondInputValue} 
        onChange={this.changeInput.bind(this)}/> 
        );
    }
}
 
export default SecondInput;
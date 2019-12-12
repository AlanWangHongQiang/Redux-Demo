import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store'

// const data = []

class TodoList extends Component {

    constructor(props){
        super(props)
        console.log(store.getState())
    }

    render() {
        return (
            <div style={{ margin: '10px 0 0 10px' }}>
                <div>
                    <Input placeholder='Write Something' style={{ width: '250px', marginRight: '10px' }}></Input>
                    <Button type='primary'>Add</Button>
                </div>
                <div style={{ margin: '10px', width: '300px' }}>
                    <List bordered dataSource={[]} renderItem={(item) => (<List.Item>{item}</List.Item>)}></List>
                </div>

            </div>
        );
    }
}

export default TodoList;
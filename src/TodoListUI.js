import React from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import SecondInput from './SecondInput'

const TodoListUI = (props)=>{
    return (<div style={{ margin: '10px 0 0 10px' }}>
            <div>
                <Input placeholder={props.inputValue}
                    style={{ width: '250px', marginRight: '10px' }}
                    onChange={props.changeInputValue}
                    value={props.inputValue}
                />
                <Button type='primary' onClick={props.clickBtn}>Add</Button>
            </div>
            <div style={{ margin: '10px', width: '300px' }}>
                <List bordered dataSource={props.list} renderItem={(item, index) => (<List.Item onClick={() => props.deleteItem(index)}>{item}</List.Item>)}></List>
            </div>
            <div>
                <SecondInput/>
            </div>

        </div>);
}

// class TodoListUI extends Component {

//     render() {
//         return (<div style={{ margin: '10px 0 0 10px' }}>
//             <div>
//                 <Input placeholder={this.props.inputValue}
//                     style={{ width: '250px', marginRight: '10px' }}
//                     onChange={this.props.changeInputValue}
//                     value={this.props.inputValue}
//                 />
//                 <Button type='primary' onClick={this.props.clickBtn}>Add</Button>
//             </div>
//             <div style={{ margin: '10px', width: '300px' }}>
//                 <List bordered dataSource={this.props.list} renderItem={(item, index) => (<List.Item onClick={() => this.props.deleteItem(index)}>{item}</List.Item>)}></List>
//             </div>

//         </div>);
//     }
// }

export default TodoListUI;
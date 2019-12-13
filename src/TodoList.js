import React, { Component } from 'react';
// import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM} from './store/actionTypes'
import {changeInputAction,addItemAction,deleteItemAction,getListAction,getTodoList,getMyListAction} from './store/actionCreators'
import TodoListUI from './TodoListUI';
import store from './store'
import axios from 'axios'

// const data = []

class TodoList extends Component {

    constructor(props){
        super(props)
        //console.log(store.getState())
        this.state = store.getState()
        this.changeInputValue = this.changeInputValue.bind(this)
        this.storeChange = this.storeChange.bind(this)
        this.clickBtn = this.clickBtn.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        store.subscribe(this.storeChange)
    }

    changeInputValue(e){
        // const action = {
        //     type:CHANGE_INPUT,
        //     value:e.target.value
        // }
        const action = changeInputAction(e.target.value);
        store.dispatch(action)
        //console.log(e.target.value)
    }

    storeChange(){
        this.setState(store.getState())
    }
    clickBtn(){
        //console.log('btn Click')
        // const action = {
        //     type:ADD_ITEM,
        // }
        const action = addItemAction()
        store.dispatch(action)
    }
    deleteItem(index){
        // const action = {
        //     type:DELETE_ITEM,
        //     index: index
        // }
        const action = deleteItemAction(index)
        store.dispatch(action)
    }

    componentDidMount(){
        //传统写法
        // axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList')
        // .then(res=>{
        //     // console.log(123);
        //     // console.log(res);
        //     const action = getListAction(res.data)
        //     store.dispatch(action)
        // })
        //thunk写法，应该是会判断action的类型，如果是方法则把dispatch当作参数传进去
        // const action = getTodoList();
        // store.dispatch(action);
        //Saga写法
        const action = getMyListAction()
        store.dispatch(action);
    }

    render() {
        return (
            <TodoListUI
                inputValue={this.state.todoList.inputValue}
                changeInputValue={this.changeInputValue}
                clickBtn={this.clickBtn}
                list={this.state.list}
                deleteItem={this.deleteItem}
            ></TodoListUI>
        );
    }

    
}

export default TodoList;
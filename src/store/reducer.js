import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST} from './actionTypes'

const reducer = {
    inputValue: 'Write Something',
    list: [
        // 'Task1', 'Task2', 'Task3'
    ]
}
export default (state = reducer, action) => {
    //console.log(action);
    //reducer里只能接收state，不能改变state
    if (action.type === CHANGE_INPUT) {
        console.log("state in todoList")
        console.log(state)
        let newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState
    }
    if (action.type === ADD_ITEM) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    if (action.type === DELETE_ITEM) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1)
        return newState
    }
    if(action.type===GET_LIST){
        let newState = JSON.parse(JSON.stringify(state));
        newState.list = action.data.data.list;
        return newState
    }
    return state
}
import { CHANGE_SEC_INPUT } from './actionTypes'

const reducer1 = {
    secondInputValue:''
}

export default (state=reducer1,action)=>{
    if(action.type===CHANGE_SEC_INPUT){
        console.log('state in secondinput')
        console.log(state)
        let newState = JSON.parse(JSON.stringify(state));
        newState.secondInputValue = action.value;
        return newState
    }
    return state;
}
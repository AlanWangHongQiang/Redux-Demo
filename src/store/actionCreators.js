import { CHANGE_INPUT,ADD_ITEM,DELETE_ITEM,GET_LIST,GET_MY_LIST ,CHANGE_SEC_INPUT} from './actionTypes'
import axios from 'axios'

//箭头函数的多行return要加上括号，因为只有一个表达式所以他是个return
export const changeInputAction = (value)=>({
    type:CHANGE_INPUT,
    value:value
})

export const addItemAction = ()=>({
    type:ADD_ITEM,
})

export const deleteItemAction = (index)=>({
    type:DELETE_ITEM,
    index
})

export const getListAction = (data)=>({
    type:GET_LIST,
    data
})

export const getTodoList = ()=>{
    return (dispatch)=>{
        axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList')
        .then(res=>{
            // console.log(123);
            //console.log(res);
            const action = getListAction(res.data)
            dispatch(action)
           
        })
    }
}
export const changeSecondInputAction = (value)=>{
    return {
        type:CHANGE_SEC_INPUT,
        value
    }
}

export const getMyListAction = ()=>({
    type:GET_MY_LIST,
})


//此处因为不是一个表达式，所以大括号代表方法
//而方法内部的return多行可以加也可以不加小括号
// export const changeInputAction = (value)=>{
//     let abc = 123;
//     return ({
//         type:CHANGE_INPUT,
//         value:value
//     })
// }
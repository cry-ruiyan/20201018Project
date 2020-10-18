import {ALL_TODO_ITEM,DEL_TODO_ITEM,CHANGE_TODO_ITEM,ADD_TODO_ITEM,REMOVE_TODO_ITEM,CHECKED_TODO_ITEM} from "./actionTypes"
const defaultState = {
    todos:[
        // {id:1,title:"看了一个小时的react",finished:false},
        // {id:2,title:"看了一个小时的vue",finished:false},
        // {id:3,title:"看了一个小时的webpack",finished:false},
        // {id:4,title:"看了一个小时的eslint",finished:false},
      ],
      finishedCount:0
}
export default (state=defaultState,action) => {
    //0.获取所有的记录
    if(action.type === ALL_TODO_ITEM ){
        let newState = JSON.parse(JSON.stringify(state))
        newState.todos = action.todos;
        return newState;
    }
    //1.删除一条doto
    if(action.type ===DEL_TODO_ITEM ){
        let newState = JSON.parse(JSON.stringify(state))
        let finishedCount = 0;
        newState.todos.forEach((item,index) => {
            if(item.id === action.todoId){
                newState.todos.splice(index,1)
            }
        })
        newState.todos.forEach(item => {
            if(item.finished){
                finishedCount++;
            }
        })
        newState.finishedCount = finishedCount;
        return newState;
    }
    //1.复选框修改一条数据
    if(action.type === CHANGE_TODO_ITEM ){
        let newState = JSON.parse(JSON.stringify(state))
        let finishedCount = 0;
        newState.todos.forEach((item,index) => {
            if(item.id === action.todoId){
                item.finished  = action.isFinished;
            }
            if(item.finished){
                finishedCount++;
            }
        })
        //返回新的数据状态
        newState.finishedCount = finishedCount;
        return newState;
    }
     //3.添加一条数据
     if(action.type === ADD_TODO_ITEM ){
        let newState = JSON.parse(JSON.stringify(state))
        newState.todos.push(action.todo)
        return newState;
    }
    //4.删除已完成的数据
    if(action.type === REMOVE_TODO_ITEM ){
        let newState = JSON.parse(JSON.stringify(state))
        let nowArr = [];
        newState.todos.forEach(item => {
            if(!item.finished){
                nowArr.push(item)
            }
        })
        //返回最新的状态
        newState.todos = nowArr;
        newState.finishedCount = 0;
        return newState;
    }
    //全选与非全选
    if(action.type === CHECKED_TODO_ITEM){
        let newState = JSON.parse(JSON.stringify(state))
        let finishedCount = 0;
        newState.todos.forEach((item,index) => {
            item.finished = action.flag;
        })
        newState.todos.forEach(item => {
            if(item.finished){
                finishedCount++;
            }
        })
        newState.finishedCount = finishedCount;
        return newState;
        }
    return state;
}
import {ALL_TODO_ITEM,DEL_TODO_ITEM,CHANGE_TODO_ITEM,ADD_TODO_ITEM,REMOVE_TODO_ITEM,CHECKED_TODO_ITEM} from "./actionTypes"
import {getTodoList} from './../api/index'
import store from "./../store/index";

//0.获取所有的记录
// export const getAllItemAction = (todos) => ({
//     type:ALL_TODO_ITEM,
//     todos
// })
export const getAllItemAction = (todos) => {
    return (dispatch) => {
        getTodoList().then((res) => {
            if(res.success_code === 200){
                const todos = res.items;
                store.dispatch({
                    type:ALL_TODO_ITEM,
                    todos
                })
            }
        });
    }
}
//1.删除一条记录
export const getDelItemAction = (todoId) => ({
    type:DEL_TODO_ITEM,
    todoId
})
//2.复选框修改一条记录
export const getChangeItemAction = (todoId,isFinished) => ({
    type:CHANGE_TODO_ITEM,
    todoId,
    isFinished
})
//3.复选框修改一条记录
export const getAddItemAction = (todo) => ({
    type:ADD_TODO_ITEM,
    todo
})
//4.删除已经完成的所有记录
export const getRemoveItemAction = () => ({
    type:REMOVE_TODO_ITEM
})
//5.全选与非全选
export const getCheckedItemAction = (flag) => ({
    type:CHECKED_TODO_ITEM,
    flag
})
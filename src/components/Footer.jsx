import React,{Component} from 'react'
import {getRemoveItemAction,getCheckedItemAction} from './../store/actionCreators'
import { connect } from 'react-redux';

 class Footer extends Component{
    render(){
        const {finishedCount,todos,delAll,delFinishedFn} = this.props;
        return (
            <div className="todo footer" >
                <label>
                    <input 
                    type="checkbox" 
                    checked = {todos.length>0&&finishedCount === todos.length}  
                    onChange ={() => delAll(finishedCount !== todos.length)}
                    />
                </label>
                <span>
        <span>已完成{finishedCount}件</span> / 总计{todos.length}件
                </span>
                <button 
                onClick={() => delFinishedFn()}
                className="btn btn-warning" 
                >清除已完成任务</button>
            </div>
        )
    }
} 
const  mapStateToProps = (state) => {
    return {
        todos:state.todos,
        finishedCount:state.finishedCount
    }
}
const mapDispacthToProps = (dispatch) => {
    return {
        delAll(flag){
            const action = getCheckedItemAction(flag);
            dispatch(action);
        },
        delFinishedFn(){
            const action = getRemoveItemAction();
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps,mapDispacthToProps)(Footer)
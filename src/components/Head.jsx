import React,{Component} from 'react'
import {getAddItemAction} from './../store/actionCreators'
import { connect } from 'react-redux';


class Head extends Component{
    constructor(props){
        super(props)
        this.myInput = React.createRef();
    }
    handleFn = (e) => {
        if(e.keyCode === 13){
            if(!this.myInput.current.value){
                alert("任务不能为空！！")
                return;
            }
        const {todos} = this.props;
        const lastToDoId = todos.length ===0?0:todos[todos.length-1].id
        let todo = {id:lastToDoId+1,finished:false,title:this.myInput.current.value}
        this.props.addTodo(todo)
        this.myInput.current.value = "";
        }
    }
    render(){
        return (
            <div className="todo header" >
                <input 
                ref={this.myInput}
                onKeyDown = {(e) => this.handleFn(e)}
                type="text" 
                placeholder="请输入今天的任务详单" />
            </div>
        )
    }
} 
const mapStateToProps = (state) =>{
    return{
        todos:state.todos
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        addTodo(todo){
            const action  = getAddItemAction(todo);
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Head)
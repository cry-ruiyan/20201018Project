import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {getDelItemAction,getChangeItemAction} from './../store/actionCreators'
import { connect } from 'react-redux';
class Item extends Component{
    constructor(props){
        super(props)
        this.state = {
            showDelBtn:false
        }
    }
    static propTypes = {
        todo:PropTypes.object.isRequired, //数据数组
    }
    _hasShowBtn(flag){
        this.setState({
            showDelBtn:flag
        })
    }
    render(){
        const {todo,dealRemove,changeCheck} = this.props;
        const {showDelBtn} = this.state;
        return (
               <li 
               onMouseOver={() => this._hasShowBtn(true)}
               onMouseOut={() => this._hasShowBtn(false)}
               >
                   <label>
                        <input type="checkbox" 
                        checked ={todo.finished}
                        onChange={() => changeCheck(todo.id,!todo.finished) } />
                        <span>{todo.title}</span>
                   </label>
                   <button 
                   onClick={() => dealRemove(todo.id)}
                   className="btn btn-warning" 
                   style={{display:showDelBtn?"block":"none"
                   }}>删除</button>
               </li>
        )
    }
} 
const mapDispatchToProps = (dispatch) => {
    return {
        dealRemove(todoId){
            const action  = getDelItemAction(todoId);
            dispatch(action)
        },
        changeCheck(todoId,isFinished){
            const action  = getChangeItemAction(todoId,isFinished);
            dispatch(action)
        }
    }
}
export default connect(null,mapDispatchToProps)(Item)
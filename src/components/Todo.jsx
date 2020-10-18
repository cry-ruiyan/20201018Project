import React,{ Component } from 'react';
import Head from './Head'
import List from './List'
import Footer from './Footer'
import {getAllItemAction} from './../store/actionCreators'
import './../App.css';
import {connect} from 'react-redux'

class Todo extends Component{
  componentDidMount(){
      this.props.reqTodoList();
    //   const action = getAllItemAction();
    //   store.dispatch(action);
  }
  render(){
    return(
      <div className="todo-container" > 
          <div className="todo-wrap" >
              <Head />
              <List  />
              <Footer />
          </div>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
    return {
        reqTodoList(){
            const action = getAllItemAction();
            dispatch(action);
        }
    }
}
export default connect(null,mapDispatchToProps)(Todo);

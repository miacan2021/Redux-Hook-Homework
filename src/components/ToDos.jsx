import React from 'react'
import { useDispatch } from 'react-redux'
import { doneTodoAction } from '../redux/action/actions'

const ToDos = ({todoArr}) => {
    const dispatch = useDispatch()
    const changeIsDone = (id) => {
      dispatch(doneTodoAction(id))
    }

  return (
      <>
        {
            todoArr && todoArr.map((todo) => (
                <div className='collection-item' key={todo.id} onClick={() => changeIsDone(todo.id)}>
                    <span style={{ textDecoration: todo.isDone ? "line-through": "none" }}>{todo.content}</span>
                </div>
            ))
        }
      </>
  )
}

export default ToDos

import React from 'react'

const ToDos = ({todoArr}) => {
  return (
      <>
        {
            todoArr && todoArr.map((todo) => (
                <div className='collection-item' key={todo.id}>
                    <span style={{ textDecoration: todo.isDone ? "line-through": "none" }}>{todo.content}</span>
                </div>
            ))
        }
      </>
  )
}

export default ToDos

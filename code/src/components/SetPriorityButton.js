import React from 'react'
import { useDispatch } from 'react-redux'
import { Grade } from '@material-ui/icons'

import todo from '../reducers/todo'

const DeleteButton = ({ item }) => {
  const dispatch = useDispatch()
  return (
    <div
      aria-label="set-priority-button"
      className="set-priority"
      onClick={() => dispatch(todo.actions.togglePriority(item.id))}
    >
      <Grade style={{ color: item.isPriority ? "#8da7fe" : "white" }} />
      <p> {item.isPriority ? "Remove priority" : "Set as priority"} </p>
    </div>
  )
}
export default DeleteButton
import React from 'react'
import { useDispatch } from 'react-redux'
import { format } from 'date-fns'
import { Checkbox } from '@material-ui/core';

import todo from '../reducers/todo'
import DeleteButton from './DeleteButton'

const TodoThumb = ({ item }) => {
  const dispatch = useDispatch()
  return (
    <div className="item-container">
      <div className="todo-main">
        <Checkbox
          color="primary"
          checked={item.isComplete}
          onChange={() => dispatch(todo.actions.toggleChecked(item.id))}
          inputProps={{ 'aria-label': 'Checkbox' }}
        />
        <p className="item-description">{item.description}</p>
        <div className="delete-button">
          <DeleteButton item={item} />
        </div>
      </div>
      <div className="todo-details">
        <p className="date-created">Created: {format(item.dateCreated, 'dd MMMM YYY')}</p>
        <p className="deadline">Deadline: {item.deadline === "" ? "No set deadline" : format(new Date(item.deadline), 'dd MMMM YYY')}</p>
      </div>

    </div>
  )
}
export default TodoThumb
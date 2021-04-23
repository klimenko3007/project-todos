import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import EmptyTodoList from './EmptyTodoList'
import TodoThumb from './TodoThumb'
import FiltersList from './FiltersList'


const TodoList = () => {
  const items = useSelector((store) => store.todo.items)
  const filters = useSelector(store => store.todo.filters)
  const [filteredItimes, setFilteredItems] = useState([])

  useEffect(() => {
    let newFilteredItems = [...items]
    filters.forEach(filter => {
      if (filter.name === "done" && filter.status) {
        newFilteredItems = (newFilteredItems.filter(item => item.isComplete))
      }
      if (filter.name === "to do" && filter.status) {
        newFilteredItems = (newFilteredItems.filter(item => !item.isComplete))
      }
      if (filter.name === "past deadline" && filter.status) {
        newFilteredItems = (newFilteredItems.filter(item => (new Date(item.deadline) < Date.now())))
      }
      if (filter.name === "priority" && filter.status) {
        newFilteredItems = (newFilteredItems.filter(item => item.isPriority))
      }
    })
    setFilteredItems(newFilteredItems)
  }, [filters, items ])

  return (
    <div className="list-container">
      {items.length === 0 && <EmptyTodoList />}
      {items.length > 0 && <FiltersList filters={filters} />}
      <div className="tasks-container">
        {filteredItimes.map((item) => <TodoThumb key={item.id} item={item} />)}
      </div>
    </div>
  )
}

export default TodoList
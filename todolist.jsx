
import { TodoItem } from "./todoItem"
export function TodoList({todos, toggleTodo, deleteTodo}){
    return(
        <ul className='list'>
            {todos.length === 0 && 'None'}
            {todos.map(todo => {
                return ( 
                 <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    
      )
    })}
  </ul>
    )
}
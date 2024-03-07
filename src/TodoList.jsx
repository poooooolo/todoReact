import {TodoItem} from './TodoItem'

export function TodoList({todos,toggleTodo,deleteTodo}){
    return (  
      <ul className="list">
        {todos.lenght === 0 && "No todos"}
        {todos.map(todo => {
          return (
            <TodoItem 
              {...todo} 
              key={todo.id} 
              toggleTodo={toggleTodo} 
              deleteTodo={deleteTodo}
            />
          )
        })}
    </ul>
  )
}
//id={todo.id} completed={todo.completed} title={todo.title} en vez de esto hacemos
// {...todo} y así le pasamos igualmente todos los props

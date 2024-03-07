import {useEffect, useState} from 'react'
import {NewTodoForm} from './NewTodoForm'
import './styles.css'
import {TodoList} from './TodoList'

function App() {
  const [todos,setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if(localValue == null) return []

    return JSON.parse(localValue)
  }) //para crear nuevos todos

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON .stringify(todos))
  },[todos]) //cada vez que se ejecuta esta función se están guardando nuestros todos en el local storage

  function addTodo(title){
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id : crypto.randomUUID(), title, completed : false}
      ]
    })
  }

  function toggleTodo(id, completed){
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id){
          return {...todo, completed}
        }
        return todo
      })
    })
  }

  function deleteTodo(id){
    setTodos(currentTodos =>{
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <> 
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>      
  )
}
export default App;


//htmlFor para decirle a que ccmapo de entrada está asociado
//la prop key es para que cada uno de los elementos sea único sobretodo si lo 
//modificamos o borramos

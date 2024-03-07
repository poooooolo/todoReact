export function TodoItem({completed,id,title,toggleTodo,deleteTodo}){
    return (
        <li> 
            <label>
                <input 
                    type="checkbox" 
                    checked={completed}
                    onChange={evento => toggleTodo(id, evento.target.checked)} 
                />
                {title} 
            </label>
            <button onClick={() => deleteTodo(id)} className="btn btn-danger">
                Delete
            </button>
        </li>
    )
}
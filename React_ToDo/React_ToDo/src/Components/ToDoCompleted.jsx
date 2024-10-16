import React from 'react'

const ToDoCompleted = ({todos,deleteTodos}) => {
    const completedTask = todos.filter((todo)=>todo.isCompleted)    //filter completed task(isCompleted=true)
    return (
        <div>
            <h1 className="text-xl font-bold">Completed Tasks</h1>
            {completedTask.length===0 ? (
                <p className="text-gray-500">No Completed Task</p>
            ):(
                <ul className="mt-4">
                    {completedTask.map((todo)=>(
                        <li key={todo.id} className="flex justify-between items-center p-2 border-b">
                            <div>
                                <p>{todo.task}</p>
                                <small className="text-gray-500">{todo.date}</small>
                            </div>
                            <div>
                                <button className="text-red-500 hover:text-red-700"
                                onClick={() => deleteTodos(todo.id)}>❌</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default ToDoCompleted

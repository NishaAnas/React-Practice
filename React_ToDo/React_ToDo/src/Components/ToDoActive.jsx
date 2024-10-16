import React from 'react'

const ToDoActive = ({todos,completeTodos,deleteTodos}) => {
    const activeTodos = todos.filter((todo)=>!todo.isCompleted)     //filter not completed task(isCompleted=false)
    return (
        <div>
            <h1 className="text-xl font-bold">Active Tasks</h1>
            {activeTodos.length===0 ? (
                <p className="text-gray-500">No Active Task</p>
            ):(
                <ul className="mt-4">
                    {activeTodos.map((todo)=>(
                        <li key={todo.id} className="flex justify-between items-center p-2 border-b">
                            <div>
                                <p>{todo.task}</p>
                                <small className="text-gray-500">{todo.date}</small>
                            </div>
                            <div className="space-x-2">
                                <button className="text-green-500 hover:text-green-700"
                                onClick={() => completeTodos(todo.id)}>✅</button>
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

export default ToDoActive

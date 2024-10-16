import React, { useState } from "react";
import { v4 as uuid4 } from "uuid";
import ToDoForm from "./ToDoForm";
import ToDoActive from "./ToDoActive";
import ToDoCompleted from "./ToDoCompleted";
import background from "../assets/TodoBackground.jpg"

const ToDoWrapper = () =>{

    const[Todos,setTodos] = useState([]);

    const addTodos =(Newtask)=>{
        const newTask = {
            id:uuid4(),
            task:Newtask,
            date:new Date().toLocaleString(),
            isCompleted:false
        }
        setTodos([...Todos,newTask])
    }

    const completeTodos =(id) =>{
        const updatedTodos = Todos.map((todo)=>
            todo.id === id ? {...todo , isCompleted:true } : todo 
        )
        setTodos(updatedTodos);
    }
    

    const deleteTodos = (id) =>{
        setTodos(Todos.filter((todo)=>todo.id!==id));
    }

    const today = new Date().toLocaleString();

    return(
        <>
            <div
                className="min-h-screen bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${background})` }} 
            >
                <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg max-w-lg w-full text-center">
                    <h1 className="text-3xl font-bold mb-4">TODO</h1>
                    <h2 className="text-lg text-gray-600 mb-6">{today}</h2>
                    <ToDoForm addTodos={addTodos}/>
                    <ToDoActive todos={Todos} completeTodos={completeTodos} deleteTodos={deleteTodos}/>
                    <ToDoCompleted todos={Todos} deleteTodos={deleteTodos} />
                </div>
            </div>
        </>
    )
}

export default ToDoWrapper
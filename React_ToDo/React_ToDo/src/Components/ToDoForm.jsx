import React,{useState} from 'react'

const ToDoForm = ({addTodos}) => {
    const [Newtask,setNewtask] = useState("");   //for new task
    const [error, setError] = useState("");      //for error

    const handleChange = (e) => {
        setNewtask(e.target.value);
        setError("");
    }

    const handleSubmit = () =>{
        if(!Newtask.trim()){
            setError("Please enter the task");
        }else{
            addTodos(Newtask);
            setNewtask("");
        }
    }

    return (
        <div className="flex flex-col items-start space-y-2">
            <div className="flex items-center space-x-4 w-full">
                <input
                    type='text'
                    placeholder='Enter the task'
                    className='px-4 h-10 focus:bg-slate-200 w-4/5'
                    value={Newtask}
                    onChange={handleChange}
                />
                <button
                    className='bg-slate-500 h-9 w-1/5 hover:bg-slate-400 rounded-lg'
                    onClick={handleSubmit}
                >
                    Add Task
                </button>
            </div>
            {error && <span className="text-red-500 text-sm">{error}</span>}  
        </div>
    );
}

export default ToDoForm

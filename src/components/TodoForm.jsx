import React, { useState } from 'react';
import { useTodo } from '../contexts/TodoContext';

function TodoForm() {
    // State to manage the todo input
    const [todo, setTodo] = useState('');
    
    // Get the addTodo function from the TodoContext
    const { addTodo } = useTodo();

    // Function to add a new todo
    const add = (e) => {
        e.preventDefault();

        // If the todo input is empty, return early
        if (!todo) return;

        // Add the new todo using the addTodo function
        addTodo({ todo, completed: false });

        // Clear the todo input
        setTodo('');
    }

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

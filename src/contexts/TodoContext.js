import { createContext, useContext } from "react";

// Create a context for managing todos and associated functions
export const TodoContext = createContext({
    // Default todos state
    todos: [
        {
            id: 1,
            todo: "Todo msg",
            completed: false,
        }
    ],
    // Default addTodo function
    addTodo: (todo) => {},
    // Default updateTodo function
    updateTodo: (id, todo) => {},
    // Default deleteTodo function
    deleteTodo: (id) => {},
    // Default toggleComplete function
    toggleComplete: (id) => {}
});

// Custom hook to access the TodoContext
export const useTodo = () => {
    return useContext(TodoContext);
}

// Export the TodoProvider for wrapping components that need access to the context
export const TodoProvider = TodoContext.Provider;

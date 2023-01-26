
import React, { useRef } from "react";

interface NewToDoProps {
    onAdd: ( todoText: string) => void
}

export const NewToDo : React.FC<NewToDoProps> = ( props) => {
    
    const userInputRef = useRef<HTMLInputElement>( null)
    const onSubmit = ( event: React.FormEvent) => {
        event.preventDefault()
        const userText = userInputRef.current?.value!
        props.onAdd(userText)
    }

    return <form onSubmit={ onSubmit}>
        <label htmlFor ='todo-text'> To Do Text</label>
        <input type='text' id ='todo-text' ref = {userInputRef} />
        <button type="submit">Save</button>
    </form>
}
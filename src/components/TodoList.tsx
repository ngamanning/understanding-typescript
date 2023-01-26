import React  from "react";

interface ToDoListProps {
    items: {id: number, description: string} []
}

export const ToDoList : React.FC<ToDoListProps> = ( props) => { 
    return <ul>
        { props.items.map( item => <li>{item.description}</li>) }
    </ul>

}
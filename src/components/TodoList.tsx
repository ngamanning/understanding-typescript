import React  from "react";

interface ToDoListProps {
    items: {id: number, description: string} []
}

export const ToDoList : React.FC<ToDoListProps> = ( props) => { 
    return <ul>
        { props.items.map( (item,index) => <li key={index}>{item.description}</li>) }
    </ul>

}
import React from 'react'
 
const ListGroup = props => {
    const {items, valueProperty, textProperty} = props;
    return (
        <ul className="list-group">
            {items.map(item =>(
 <li key= {item[valueProperty]} className="list-group-item">
     {item.[textProperty]}
 </li>
            ))}
           
        </ul>
    )
}
ListGroup.defaultProps = {   // passing multiple props to another components 
    
    textProperty :"name" ,
    valueProperty: "_id",
}
 
export default ListGroup;
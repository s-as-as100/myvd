import React from 'react'
 
const ListGroup = props => {
    const {items, valueProperty, textProperty , onItemSelect, selectedItem} = props;
    return (
        <ul className="list-group">
            {items.map(item =>(
 <li onClick ={() => onItemSelect(item)}
  key= {item[valueProperty]} 
  className= { item === selectedItem ?
   "list-group-item active" : 
   "list-group-item"}>
     {item[textProperty]}
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
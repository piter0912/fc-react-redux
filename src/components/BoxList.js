import React from 'react';
import ListElement from './ListElement';

const BoxList = ({type, list, onEdit, onDelete, inEdit}) => {

    return ( 
        <div className="elementBody">
            <ul id={`${type}_list`}>
                {list.map(el => <ListElement key={el.id} id={el.id} type={type} isInEdit={el.id === inEdit.id} text={el.text} amount={el.amount} onEdit={onEdit} onDelete={onDelete}/>)}
            </ul>
        </div>
     );
}
 
export default BoxList;
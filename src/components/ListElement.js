import React from 'react';

const ListElement = ({id, type, text, amount, onEdit, onDelete, isInEdit}) => {

    const handleEdit = () => {
        onEdit(type, id);
    }

    const handleDelete = () => {
        onDelete(type, id);
    }

    const style = isInEdit ? {border: '3px solid lightblue'} : {border: 0};
    
    return ( 
        <div style={style}>
        <div className="listElement">
            <li className="elementName">
                <span className="item">{text}</span>
                <span> - </span>
                <span className="item incomeValue">{amount}</span>
                <span>zł</span>
            </li>
            {!isInEdit && <div className="buttons">
                <button onClick={handleEdit} className="elementButton">{isInEdit ? 'W edycji' : 'Edytuj'}</button>
                <button onClick={handleDelete} className="elementButton">Usuń</button>
            </div>}
        </div>
        </div>
     );
}

export default ListElement;
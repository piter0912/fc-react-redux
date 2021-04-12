import React from 'react';

const Form = ({type, onAdd, isInEdit, name, amount, onNameChange, onAmountChange}) => {

    const handleAdd = () => {
        onAdd(type);
    }

    const handleKeyPress = (event) => {
        console.log(event.keyCode);
        if (event.key === 'Enter') {
            onAdd(type);
        } 
    }

    return ( 
        <div className="elementHeadNew">
            <input 
                type="text" 
                id={`${type}_new_name`}
                className="newName"
                placeholder={type==="income" ? "Nazwa przychodu" : "Nazwa wydatku"}
                onChange={onNameChange}
                onKeyPress={handleKeyPress}
                value={name}
            />
            <input 
                type="number" 
                id={`${type}_new_amount`}
                placeholder="Kwota"
                onChange={onAmountChange}
                onKeyPress={handleKeyPress}
                value={amount}
            />
            <button
                id={`${type}_new_add`}
                onClick={handleAdd}
            >
                {isInEdit ? 'Zapisz' : 'Dodaj'}
            </button>
        </div>
     );
}
 
export default Form;
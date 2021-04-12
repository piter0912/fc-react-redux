import React from 'react';
import Form from './Form';

const BoxHead = ({type, isInEdit, onAdd, name, amount, onNameChange, onAmountChange}) => {

    const style = isInEdit ? {border: '3px solid lightblue'} : {border: 0};

    return ( 
        <div className="elementHead">
            <h2 className="elementHeadTitle">{type==="income" ? 'PRZYCHODY' : 'WYDATKI'}</h2>
            <div style={style}>
                <Form 
                    onAdd={onAdd} 
                    type={type} 
                    name={name}
                    amount={amount}
                    isInEdit={isInEdit}
                    onNameChange={onNameChange} 
                    onAmountChange={onAmountChange}                    
                />
            </div>
        </div>
     );
}
 
export default BoxHead;
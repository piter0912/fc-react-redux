import React from 'react';
import BoxList from './BoxList';
import BoxFooter from './BoxFooter';
import BoxHead from './BoxHead';

const Box = ({type, onAdd, onEdit, inEdit, isInEdit, name, amount, onDelete, onNameChange, onAmountChange, list, total}) => {

    return ( 
        <div className="main">
            <BoxHead 
                type={type} 
                onAdd={onAdd} 
                name={name}
                amount={amount}
                isInEdit={isInEdit}
                onNameChange={onNameChange} 
                onAmountChange={onAmountChange}                    
            />
            <BoxList 
                type={type} 
                list={list} 
                inEdit={inEdit} 
                onEdit={onEdit}
                onDelete={onDelete}                    
            />
            <BoxFooter 
                type={type} 
                total={total}                    
            />
        </div>
     );
}
 
export default Box;
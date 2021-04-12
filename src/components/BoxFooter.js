import React from 'react';

const BoxFooter = ({type, total}) => {

    return ( 
        <div className="elementFooter">
            <span className="elementFooter">{type==="income" ? "Suma przychodów:" : "Suma wydatków:"}</span>
            <strong>
                <span id={`${type}_footer_amount`} className="elementFooter">{total}</span>
            </strong>
        </div>
     );
}
 
export default BoxFooter;
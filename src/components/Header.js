import React from 'react';

const Header = ({balance}) => {

    const title = balance > 0 ? `Możesz jeszcze wydać ${balance} złotych.` : balance === 0 ? 'Bilans wynosi zero' : `Bilans jest ujemny. Jesteś na minusie ${Math.abs(balance)} złotych.`;

    return ( 
        <div id="header">
            <img id="logo" src="https://d3fldh011ywsk8.cloudfront.net/wp-content/uploads/2017/12/Scholarship.jpg" alt="logo"/>
            <h1 id="header_title">{title}</h1>
        </div>
     );
}
 
export default Header;
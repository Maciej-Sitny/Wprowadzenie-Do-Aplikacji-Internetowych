import React from 'react';


function Produkt(props: { nazwa: string }) {
    return (
        <div>
            <h3>{props.nazwa}</h3>
        </div>
    );

}

export default Produkt;
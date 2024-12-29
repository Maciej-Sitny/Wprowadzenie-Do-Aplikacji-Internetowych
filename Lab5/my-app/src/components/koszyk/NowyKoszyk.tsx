import React from 'react';
import Produkt from './Produkt';

function NowyKoszyk() {
    const products: string[] = ["Jabłko", "Gruszka", "Pomarańcza", "Banan", "Śliwka"];


    return (
        <div>
            {products.map((product) => <Produkt nazwa={product}/>)}
        </div>
    );
}

export default NowyKoszyk;
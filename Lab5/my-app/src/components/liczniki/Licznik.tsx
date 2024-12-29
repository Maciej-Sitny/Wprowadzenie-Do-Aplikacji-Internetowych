import React from 'react';

function Licznik() {
    const [count, setCount] = React.useState(0);

    function increment() {
        setCount(count + 1);
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={increment}>Dodaj</button>
        </div>
    );

}

export default Licznik;
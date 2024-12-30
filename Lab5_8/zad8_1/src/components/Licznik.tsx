import React from 'react';

function Licznik() {
    const [count, setCount] = React.useState(()=> {
        const saved = localStorage.getItem('count');
        const initial = Number(saved) || 0;
        return initial
    });
    localStorage.setItem('count', String(count));

    React.useEffect(() => {
        localStorage.setItem('count', String(count));
    }, [count]);

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
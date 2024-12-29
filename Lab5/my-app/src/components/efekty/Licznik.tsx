import React, {useEffect} from 'react';

function Licznik() {
    const [count, setCount] = React.useState(0);

    function increment() {
        setCount(count + 1);
    }
    React.useEffect(() => {
        console.log("Licznik zwiększył się do " + count);
    },[count])

    React.useEffect(() => {
        console.log("Hello world");
    },[])
    return (
        <div>
            <p>{count}</p>
            <button onClick={increment}>Dodaj</button>
        </div>
    );

}

export default Licznik;
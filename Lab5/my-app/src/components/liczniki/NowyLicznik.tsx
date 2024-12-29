import React from 'react';
import Przycisk from "./Przycisk";
function NowyLicznik() {
    const [count, setCount] = React.useState(0);

    function increment() {
        setCount(count + 1);
    }

    return (
        <div>
            <p>{count}</p>
            <Przycisk increment={increment}/>
        </div>
    );

}

export default NowyLicznik;
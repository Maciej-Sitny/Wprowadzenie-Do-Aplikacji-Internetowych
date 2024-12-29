import React from "react";

function Aktualizacja(){
    const [object, setObject] = React.useState({name: "Pomidor", price: 50});

    function changeTo100(){
        setObject(prevObject=> ({...prevObject, price: 100}));
    }

    return (
        <div>
            Aktualnie {object.name} kosztuje {object.price} zł.
            <button onClick={changeTo100}>Zmień cenę</button>
        </div>
    )
}

export default Aktualizacja;
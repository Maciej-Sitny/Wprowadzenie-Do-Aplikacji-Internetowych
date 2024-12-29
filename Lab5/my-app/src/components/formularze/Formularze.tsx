import React from "react";

function Formularze() {
    const [text,setText] = React.useState("");
    return (
        <div>
            <input type="text" onChange={(e)=>setText(e.target.value)} placeholder="Wpisz coś"/>
            <div>{text}</div>
        </div>
    )
}

export default Formularze;
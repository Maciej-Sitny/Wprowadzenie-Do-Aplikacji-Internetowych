import React, { useEffect, useState } from "react";

function Tytul() {
    const [title, setTitle] = useState("");

    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <input
            type="text"
            placeholder="Wpisz tytuł"
            value={title}
            onChange={e => setTitle(e.target.value)}
        />
    );
}

export default Tytul;
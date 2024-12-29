import React from "react";

interface Student {
    name: string;
    surname: string;
    year: number;
}

function Dodawanie(props: { change: React.Dispatch<React.SetStateAction<Student[]>> }) {
    const [name, setName] = React.useState("");
    const [surname, setSurname] = React.useState("");
    const [year, setYear] = React.useState(0);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        props.change((prevStudents: Student[]) => [...prevStudents, { name, surname, year }]);
        setName("");
        setSurname("");
        setYear(2025);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Imię" />
            <input type="text" value={surname} onChange={e => setSurname(e.target.value)} placeholder="Nazwisko" />
            <input type="number" value={year}  onChange={e => setYear(Number(e.target.value))} placeholder="Rok urodzenia" />
            {(name === "" || surname === "" || year === 0)? <button disabled type="submit">Dodaj</button>: (isNaN(Number(year))) ?
                (<p>Rok urodzenia musi być liczbą!</p>) : <button type="submit">Dodaj</button>}
        </form>
    );
}

export default Dodawanie;
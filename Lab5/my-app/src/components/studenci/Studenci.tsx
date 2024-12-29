import React from "react";

function Studenci(){
    interface Student {
        name: string;
        surname: string;
        year: number;
    }

    const students: Student[] = [
        {name: "Jan", surname: "Kowalski", year: 1990},
        {name: "Anna", surname: "Nowak", year: 1991},
        {name: "Piotr", surname: "Wiśniewski", year: 1992}
    ];

    return (
        <table>
            <thead>
                <tr>
                    <th>Imię</th>
                    <th>Nazwisko</th>
                    <th>Rok urodzenia</th>
                </tr>
            </thead>
            <tbody>
                {students.map((student, index) => (
                    <tr key={index}>
                        <td>{student.name}</td>
                        <td>{student.surname}</td>
                        <td>{student.year}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Studenci;
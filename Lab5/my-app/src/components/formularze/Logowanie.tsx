import React from "react";

function Logowanie(){
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [repeatPassword, setRepeatPassword] = React.useState("")
    return (
        <div>
            <input type="text" onChange={e=>{setUsername(e.target.value)}} placeholder="Nazwa użytkownika"/>
            <input id="password" onChange={e=>{setPassword(e.target.value)}} type="text" placeholder="Wpisz hasło"/>
            <input id="repeatPassword" onChange={e=>{setRepeatPassword(e.target.value)}} type="text" placeholder="Powtórz hasło"/>

            {(username==="" || password === "" || repeatPassword=="") ? <button type="button" disabled>Zaloguj</button>: ((username!=="" && password!=="" && repeatPassword!=="") && password!==repeatPassword ? <button type="button" onClick={()=> alert("Hasła są niezgodne")}>Zaloguj</button>: (username!=="" && password!=="" && repeatPassword!=="" && password===repeatPassword)? <button type="button" onClick={()=> alert("Zalogowano poprawnie")}>Zaloguj</button>:null)}
        </div>
    )
}
export default Logowanie;
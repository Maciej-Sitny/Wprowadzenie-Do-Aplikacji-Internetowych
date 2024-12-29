import React from "react";

function Haslo(){
    const [password, setPassword] = React.useState("");
    const [repeatPassword, setRepeatPassword] = React.useState("")
    return (
        <div>
            <input id="password" onChange={e=>{setPassword(e.target.value)}} type="text" placeholder="Wpisz hasło"/>
            <input id="repeatPassword" onChange={e=>{setRepeatPassword(e.target.value)}} type="text" placeholder="Powtórz hasło"/>
            {password=="" && repeatPassword=="" ? <div>Proszę wprowadzić hasło</div>: (password!=repeatPassword ? <div>Hasła nie są zgodne</div>: null)}
        </div>
    )
}
export default Haslo;
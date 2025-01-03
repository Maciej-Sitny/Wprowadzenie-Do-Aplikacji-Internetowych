import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Koszyk from './components/koszyk/Koszyk';
import NowyKoszyk from './components/koszyk/NowyKoszyk';
// import Licznik from "./components/liczniki/Licznik";
import NowyLicznik from "./components/liczniki/NowyLicznik";
import Formularze from "./components/formularze/Formularze";
import Haslo from "./components/formularze/Haslo";
import Logowanie from "./components/formularze/Logowanie";
import Ternary from "./components/inne/Ternary";
import Aktualizacja from "./components/inne/Aktualizacja";
import Studenci from "./components/studenci/Studenci";
import StudentManager from "./components/studenci/StudentManager";
import Licznik  from "./components/efekty/Licznik" ;
import Tytul from "./components/efekty/Tytul";
import Odliczanie from "./components/efekty/Odliczanie";
import Komentarze from "./components/produkty/Komentarze";


function App() {
  return (
    <div className="App">

        <h1>Zadanie 1</h1>
        <NowyKoszyk/>
        <h1>Zadanie 2</h1>
        <NowyLicznik/>
        <h1>Zadanie 3</h1>
        <Formularze/>
        <Logowanie/>
        <h1>Zadanie 4</h1>
        <Ternary/>
        <Aktualizacja/>
        <h1>Zadanie 5</h1>
        {/*<Studenci/>*/}
        <StudentManager/>
        <h1>Zadanie 6</h1>
        <Licznik/>
        <Tytul/>
        <Odliczanie/>
        <h1>Zadanie 7</h1>
        <Komentarze/>
    </div>
  );
}

export default App;

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
import Licznik from "./components/efekty/Licznik";
import Tytul from "./components/efekty/Tytul";
import Odliczanie from "./components/efekty/Odliczanie";
import Komentarz from "./components/produkty/Komentarz";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

        <NowyKoszyk/>
        <NowyLicznik/>
        <Formularze/>
        <Logowanie/>
        <Ternary/>
        <Aktualizacja/>
        {/*<Studenci/>*/}
        <StudentManager/>
        <Licznik/>
        <Tytul/>
        <Odliczanie/>
        <Komentarz/>
    </div>
  );
}

export default App;

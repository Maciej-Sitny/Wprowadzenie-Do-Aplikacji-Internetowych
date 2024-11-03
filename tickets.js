// const sektory = {
//     A: ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "A10", "A11"],
//     B: ["B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9", "B10", "B11", "B12"],
//     // Możesz dodać więcej sektorów w razie potrzeby
// };
const A = 20
const B=8
const C=24

let sent=false
console.log(sent)
// Funkcja do aktualizacji numerów sektorów na podstawie wybranego sektora
function updateNumerSektora() {
    // Pobieramy wybrany sektor
    const wybranySektor = document.getElementById("sektor").value;
    const numerSektoraSelect = document.getElementById("numerSektora");

    // Czyścimy poprzednie opcje
    numerSektoraSelect.innerHTML = '<option value="">-- Wybierz --</option>';

    // Sprawdzamy, czy wybrano sektor i czy mamy dla niego zdefiniowane numery
    // if (wybranySektor =='A') {
    //     // Dodajemy nowe opcje dla wybranego sektora
    //     sektory["A"].forEach(numer => {
    //         const option = document.createElement("option");
    //         option.value = numer;
    //         option.textContent = numer;
    //         numerSektoraSelect.appendChild(option);
    //     });


    // }
    console.log(wybranySektor)
    if (wybranySektor==""){
        const image = document.getElementById("plan_ogolny")
        image.src="plan_ogolny.jpg"
    }
    if (wybranySektor=="A"){
        const image = document.getElementById("plan_ogolny")
        image.src="plan_a.jpg"
        for (let i=1; i<=A;i++){
            const option=document.createElement("option");
            option.value = i;
            option.textContent = i;
            numerSektoraSelect.appendChild(option);
        }
}
    if (wybranySektor=="B"){
        const image = document.getElementById("plan_ogolny")
        image.src="plan_b.jpg"
        for (let i=1; i<=B;i++){
            const option=document.createElement("option");
            option.value = i;
            option.textContent = i;
            numerSektoraSelect.appendChild(option);
        }
    }



if (wybranySektor=="C"){
    const image = document.getElementById("plan_ogolny")
    image.src="plan_c.jpg"
    for (let i=1; i<=C;i++){
        const option=document.createElement("option");
        option.value = i;
        option.textContent = i;
        numerSektoraSelect.appendChild(option);
    }
}



}


function wyslij(){
    const main=document.getElementById("main");
    sent=true
    const napis = document.createElement("h1");
    napis.value="Sprawdź swojego maila!";
    napis.id="sprawdz";
    main.appendChild(napis);
}

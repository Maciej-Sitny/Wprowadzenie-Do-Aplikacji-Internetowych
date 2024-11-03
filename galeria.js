// zrob slownik z linkami do tych zdjec
// const zdjecia = {
//     1: 'zdjecia_galeria\2024-03-13-travisscott1.jpg',
//     2: 'zdjecia_galeria\125721_1357230.jpeg.1500x1000_q95_crop-smart_upscale.jpg',
//     3: 'zdjecia_galeria\GettyImages-1406493744-1.jpg',
//     4: 'zdjecia_galeria\hitsdd_photo_gal__photo_1051471361.jpg',
//     5:'zdjecia_galeria\Playboi-Carti-brazil-2024-billboard-1548.jpg',
//     6: 'zdjecia_galeria\Playboi-Carti.jpg',
//     7: 'zdjecia_galeria\show-27-4000x2668.jpg',
//     8: 'zdjecia_galeria\Travis-Scott-sofi-nov-2023-billboard-1548.jpg',
//     9: 'zdjecia_galeria\travis20rome20earthquake.jpg'
// }


function wyswietl(a){
    const link = a.src
    console.log(link)
    const popup_tlo = document.createElement("div")
    popup_tlo.id="popup_tlo"

    const popup_div = document.createElement("div");
    popup_div.id="popup_div"
    popup_div.style.backgroundImage=`url(${link})`;
    // popup_div.style.backgroundImage="url(http://127.0.0.1:5500/zdjecia_galeria/2024-03-13-travisscott1.jpg)";
    // popup_div.style.backgroundImage='url(' + link + ')';
    console.log(link)

    const x = document.createElement("h1")
    x.id="x"
    x.innerText="X"
    x.addEventListener("click", function (){
        popup_tlo.remove();
        popup_div.remove();
        x.remove();
    })
    const body=document.body

    body.appendChild(popup_tlo)
    body.appendChild(popup_div)
    body.appendChild(x)
 
}

let data={}

fetch('https://dummyjson.com/products')
    .then((response) => response.json())
    .then((json) => json['products']);

async function fetchData() {
    try {
        let response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        const table = document.getElementById('tabela');
        for (let i = 0; i < 30; i++) {
            const row = document.createElement('tr');
            let imgTd = document.createElement('td');
            let titleTd = document.createElement('td');
            let descTd = document.createElement('td');
            let image = document.createElement('img');
            let title = document.createElement('h2');
            let desc = document.createElement('p');

            image.src = data.products[i].images[0]
            title.innerText = data.products[i].title;
            desc.innerText = data.products[i].description;

            imgTd.appendChild(image);
            titleTd.appendChild(title);
            descTd.appendChild(desc);
            row.appendChild(imgTd);
            row.appendChild(titleTd);
            row.appendChild(descTd);
            table.appendChild(row);

        }
    } catch (error) {
        console.error("Wystąpił błąd podczas pobierania danych:", error);
    }
}

fetchData()
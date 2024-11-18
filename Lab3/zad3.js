let data={}
let originalData = [];
fetch('https://dummyjson.com/products')
    .then((response) => response.json())
    .then((json) => json['products']);

async function fetchData() {
    try {
        let response = await fetch('https://dummyjson.com/products');
        data = await response.json();
        data=data.products.slice(0,30);
        displayProducts(data)
        originalData = [...data];
    } catch (error) {
        console.error("Wystąpił błąd podczas pobierania danych:", error);
    }
}

function displayProducts(data) {

    const table = document.getElementById('tabela');
    table.innerHTML = '';
    for (let i = 0; i < 30 && i<data.length; i++) {
        const row = document.createElement('tr');
        let imgTd = document.createElement('td');
        let titleTd = document.createElement('td');
        let descTd = document.createElement('td');
        let image = document.createElement('img');
        let title = document.createElement('h2');
        let desc = document.createElement('p');

        image.src = data[i].images[0]
        title.innerText = data[i].title;
        desc.innerText = data[i].description;

        imgTd.appendChild(image);
        titleTd.appendChild(title);
        descTd.appendChild(desc);
        row.appendChild(imgTd);
        row.appendChild(titleTd);
        row.appendChild(descTd);
        table.appendChild(row);
    }
}
function filterProducts() {
    const search = document.getElementById("search").value.toLowerCase();

    const filteredProducts = data.filter(product =>
        product.title.toLowerCase().includes(search)
    );
    console.log(filteredProducts);
    displayProducts(filteredProducts);
}

function sortProducts(order) {
    if (order === 'asc') {
        data.sort((a, b) => a.title.localeCompare(b.title));
    }
    else if (order === 'desc') {
        data.sort((a, b) => b.title.localeCompare(a.title));
    }
    else if (order === 'original') {
        data = [...originalData];
    }

    displayProducts(data);
}

fetchData()
async function LoadHTML(id, file){
    const response= await fetch(file)
    const html = await response.text()
    document.getElementById(id).innerHTML = html;
}

const services = 
[
    {"name": "Diagnoza computerizata",
    "description": "Verificarea sistemelor electronice ale vehiculului",
    "price": 150,
    "currency": "RON"},

    {"name": "Schimb ulei si filtru",
    "description": "Inlocuirea uleiului motor si a filtrelor",
    "price": 200,
    "currency": "RON"},
    
    {"name": "Inlocuire placute frana",
    "description": "Schimbarea placutelor de frana fata/spate",
    "price": 250,
    "currency": "RON"},
    
    {"name": "Echilibrare roti",
    "description": "Echilibrarea rotilor",
    "price": 100,
    "currency": "RON"},

    {"name": "Geometrie directie",
    "description": "Alinierea rotilor",
    "price": 150,
    "currency": "RON"},
]

function DisplayServices(){
    const servicesContainer = document.getElementById('prices-section');
    const serviceTable = document.createElement('table');  

    const thead = serviceTable.createTHead();
    const headerRow = thead.insertRow();

    let ServiceTypeHeader = headerRow.insertCell();
    ServiceTypeHeader.textContent = "Tip Serviciu";

    let DescriptionHeader = headerRow.insertCell();
    DescriptionHeader.textContent = "Descriere";

    let PriceHeader = headerRow.insertCell();
    PriceHeader.textContent = "Pret";

    const tbody = serviceTable.createTBody();
    services.forEach(service => {
        let row = tbody.insertRow(); 
        let serviceTypeCell = row.insertCell();
        serviceTypeCell.textContent = service.name;
        let descriptionCell = row.insertCell();
        descriptionCell.textContent = service.description;
        let priceCell = row.insertCell();
        priceCell.textContent = service.price + " " + service.currency;
    });
    servicesContainer.appendChild(serviceTable);
}
function calculateTotalPrice(){
    let total = 0;
    services.forEach(service => {
        total += service.price;
    });
    return total;
}
function calculateDiscountedPrice(){
    const totalPrice = calculateTotalPrice();
    return totalPrice * 0.85;
}

function DisplayTotalAndDiscountedPrice(){
    const totalPriceContainer = document.getElementById('total-price-section');
    const totalPrice = calculateTotalPrice();
    const discountedPrice = calculateDiscountedPrice();
    const totalPriceElement = document.createElement('h2');
    totalPriceElement.textContent = "Pret total estimativ pentru toate serviciile: " + totalPrice + " RON";
    totalPriceContainer.appendChild(totalPriceElement);

    const discountedPriceElement = document.createElement('h2');
    discountedPriceElement.textContent = "Daca optati pentru toate serviciile mentionate, beneficiati de 15% discount, asadar pretul final va fi de doar: " + discountedPrice.toFixed(2) + " RON";
    totalPriceContainer.appendChild(discountedPriceElement);
}

window.onload = function() {
    DisplayServices();
    DisplayTotalAndDiscountedPrice();

};


document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.getElementById("sidebar");
    const cart = document.getElementById("my-cart");
    const my_cart = document.getElementById("my-cart");
    const cartContent = document.createElement('div');
    cartContent.id = 'cart-content';
    let selectedItems = [];
    
    const carMakes = [
        {
            text: "ABARTH",
            year: [
                { text: "2019", price: 50 },
                { text: "2017", price: 40 },
                { text: "2015", price: 35 },
                { text: "2013", price: 30 },
                { text: "2010", price: 25 }
            ],
        },
        {
            text: 'ACURA',
            year: [
                { text: '2022', price: 60 },
                { text: '2019', price: 55 },
                { text: '2016', price: 45 },
                { text: '2014', price: 40 },
                { text: '2011', price: 35 },
                { text: '2010', price: 30 },
                { text: '2009', price: 25 },
                { text: '2000', price: 20 }
            ],
        },
        {
            text: 'AUDI',
            year: [
                { text: '2024', price: 70 },
                { text: '2021', price: 65 },
                { text: '2020', price: 60 },
                { text: '2019', price: 55 },
                { text: '2017', price: 45 },
                { text: '2015', price: 470 },
                { text: '2007', price: 358 },
                { text: '2001', price: 303 },
                { text: '1999', price: 285 },
                { text: '1991', price: 223 },
            ],
        },
        {
            text: "Jeep",
            year: [
                { text: '2024', price: 80 },
                { text: '2022', price: 75 },
                { text: '2021', price: 70 },
                { text: '2020', price: 65 },
                { text: '2015', price: 45 },
                { text: '2011', price: 40 },
                { text: '2009', price: 35 },
                { text: '2005', price: 30 },
                { text: '2003', price: 25 },
                { text: '2001', price: 20 },
                { text: '2000', price: 154 },
                { text: '1998', price: 102 },
                { text: '1994', price: 502 },
                { text: '1992', price: 109.9 },
                { text: '1991', price: 200 },
                { text: '1987', price: 120 },
                { text: '1940', price: 80 },
            ],
        },
    ];

    carMakes.forEach(make => {
        const makeHeading = document.createElement('h3');
        makeHeading.textContent = make.text;
        sidebar.appendChild(makeHeading);

        make.year.forEach(year => {
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.value = year.text;
            checkbox.id = `${make.text}-${year.text}`;
            checkbox.dataset.price = year.price; 
            checkbox.addEventListener('change', function() {
                const price = parseFloat(this.dataset.price);
                const item = {
                    text: `${this.value} ${make.text}`,
                    price: price
                };
                if (this.checked) {
                    addToCart(item);
                } else {
                    removeFromCart(item);
                }
            });

            const label = document.createElement('label');
            label.textContent = `${year.text} - $${year.price}`;
            label.setAttribute('for', checkbox.id);

            sidebar.appendChild(checkbox);
            sidebar.appendChild(label);
            sidebar.appendChild(document.createElement('br'));
        });

        sidebar.appendChild(document.createElement('hr'));
    });

    function addToCart(item) {
        selectedItems.push(item);
    }

    function removeFromCart(item) {
        selectedItems = selectedItems.filter(i => i.text !== item.text);
    }

    my_cart.addEventListener("click", showTotal);

    function showTotal(event) {
        const clicked = event.target;
        if (clicked !== my_cart) {
            return;
        }
        
        cartContent.innerHTML = '';
        
        let totalPrice = 0;
        selectedItems.forEach(item => {
            totalPrice += item.price;
            const itemDiv = document.createElement('div');
            itemDiv.textContent = `${item.text} - $${item.price.toFixed(2)}`;
            cartContent.appendChild(itemDiv);
        });
        
        const totalDiv = document.createElement('div');
        totalDiv.textContent = `Total: $${totalPrice.toFixed(2)}`;
        cartContent.appendChild(totalDiv);
        
        cartContent.style.display = 'block';
        cart.appendChild(cartContent);
    }
});



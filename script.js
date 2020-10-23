fetch("http://umarkx.com/WP/wp-json/wp/v2/bike?_embed")
    .then(initial => initial.json())
    .then(callback);

function callback(data) {
    //we now have the JSON
    console.log(data);

    //loop through data
    data.forEach(showProducts)
}

function showProducts(bike) {
    // clone template
    const template = document.querySelector("#myTemplate").content;
    const clone = template.cloneNode(true);

    clone.querySelector("img").setAttribute("src", bike.images.guid);
    clone.querySelector(".title").textContent = bike.title.rendered;
    clone.querySelector(".priceFrom").textContent = "$" + bike.price_from;

    if (bike.price_to !== null) {
        clone.querySelector(".priceTo").textContent = "$" + bike.price_to;
    } else {
        clone.querySelector(".priceTo").textContent = bike.price_to;
    }

    if (bike.stock == 1) {
        clone.querySelector(".stock").textContent = "Yes";
    } else {
        clone.querySelector(".stock").textContent = "No"
    }


    //appending
    document.querySelector(".stockGrid").appendChild(clone);
}

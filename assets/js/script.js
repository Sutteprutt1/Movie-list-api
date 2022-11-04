
fetch('https://api.tvmaze.com/shows ').then((data) => {
    return data.json();
}).then((completedata) => {
    console.log(completedata.data);

    let data1 = "";
    completedata.map.data((values) => {
        data1= 
        ` <div class="card">
            <img src=${values.image} class="images" alt="img">
            <h2 class="titel">${values.name}</h2>
            <p class="time">${values.runtime}</p>
            <h2 class="genre">${values.genres}</h2>
            <p class="rating"${values.rating}><p>
            </div> `
    });
    document.getElementById("cards").innerHTML = data1;
}).catch((err) => {
    console.log(err);
})

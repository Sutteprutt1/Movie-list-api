
fetch('https://api.tvmaze.com/shows').then((data) => {
    return data.json();
}).then((completedata) => {
    console.log(completedata);

    let data1 = "";
    completedata.map((values) => {
        data1= 
        ` <div class="card">
            <img src=${values.image.original} class="images" alt="img">
            <h2 class="titel">${values.name}</h2>
            <h2 class="time">${values.runtime} min</h2>
            <p class="genres">${values.genres}<p>
            <p class="rating">${values.rating.average}</p>
        </div> `
    });
    document.getElementById("cards").innerHTML = data1;
}).catch((err) => {
    console.log(err);
})
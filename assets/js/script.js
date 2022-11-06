
fetch('https://api.tvmaze.com/shows').then((data) => {
    return data.json();
}).then((completedata) => {
    console.log(completedata);

    let data1 = "";
    completedata.map((values) => {
        data1 +=
        `<div class="card_item">
                <div class="card_inner">
                    <img class="image" src=${values.image.original}  alt="img">
                    <h2 class="titel">${values.name}</h2>
                    <h2 class="time">${values.runtime} min</h2>
                    <p class="genres">${values.genres}<p>
                    <p class="rating">${values.rating.average}</p>
                </div>
        </div>`
    });
    document.getElementById("cards_wrap").innerHTML = data1;
}).catch((err) => {
    console.log(err);
})


// /* 
// img = image
// role name = titel
// real name = time
// film = genres + rating
// */
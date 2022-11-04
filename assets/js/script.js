
fetch('https://api.tvmaze.com/shows ').then((data) => {
    return data.json();
}).then((completedata) => {
    console.log(completedata);

    let data1 = "";
    completedata.map((values) => {
        data1+= 
        ` <div class="card">
            <img src=${values.avatar} class="images" alt="img">
            <h2 class="titel">${values.first_name}</h2>
            <p class="time">${values.email}</p>
            <h2 class="genre">${values.last_name}</h2>
            <p class="rating">Jobtitle<p>
        </div> `
    });
    document.getElementById("cards").innerHTML = data1;
}).catch((err) => {
    console.log(err);
})

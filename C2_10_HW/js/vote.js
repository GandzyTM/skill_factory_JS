const btnCats = document.getElementById('vote-cats');
btnCats.addEventListener('click', async _ => {
    const response = await fetch('https://sf-pyw.mosyag.in/sse/vote/cats', {
        method: 'post'
    });
    window.open("result.html", "_self");
});

const btnDogs = document.getElementById('vote-dogs');
btnDogs.addEventListener('click', async _ => {
    const response = await fetch('https://sf-pyw.mosyag.in/sse/vote/dogs', {
        method: 'post'
    });
    window.open("result.html", "_self");
});

const btnParrots = document.getElementById('vote-parrots');
btnParrots.addEventListener('click', async _ => {
    const response = await fetch('https://sf-pyw.mosyag.in/sse/vote/parrots', {
        method: 'post'
    });
    window.open("result.html", "_self");
});
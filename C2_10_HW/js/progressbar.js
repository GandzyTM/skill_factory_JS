const progress_dogs = document.getElementById("progress_dogs");
const progress_cats = document.getElementById("progress_cats");
const progress_parrots = document.getElementById("progress_parrots");

const header = new Headers({
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': '*'
})

const url = new URL('https://sf-pyw.mosyag.in/sse/vote/stats')
const ES = new EventSource(url, header)

ES.onerror = error => {
    ES.readyState ? progressCat.textContent = "Some error" : null;
}

ES.onmessage = message => {
    obj = JSON.parse(message.data);
    sum = obj.cats + obj.parrots + obj.dogs;
    
    dogPercent =  Math.round(obj.dogs * 100 / sum);
    progress_dogs.style.cssText = `width: ${dogPercent}%;`;
    progress_dogs.textContent = `${dogPercent}%`;
  
    catPercent =  Math.round(obj.cats * 100 / sum);
    progress_cats.style.cssText = `width: ${catPercent}%;`;
    progress_cats.textContent = `${catPercent}%`;

    parrotPercent =  Math.round(obj.parrots * 100 / sum);
    progress_parrots.style.cssText = `width: ${parrotPercent}%;`;
    progress_parrots.textContent = `${parrotPercent}%`;
}
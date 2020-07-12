const content = document.querySelector(".content");

function getRandomDog(breed) {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
}

getRandomDog('briard')
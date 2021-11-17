function randomItem(array){
    return array[Math.floor(Math.random() * array.length)];
}

async function fetch360ImagesJSON(){
    const res = await fetch("/api/trackmania360images.json"),
        json = await res.json();

    return json;
}

async function generate360(){
    const imagesJSON = await fetch360ImagesJSON(),
        map = randomItem(imagesJSON.images),
        mapNameElement = document.getElementById("backgroundMapName"),
        backgroundElement = document.getElementById("backgroundSky");

    console.log(map);
    mapNameElement.innerText = map.name + " by " + map.author;
    backgroundElement.setAttribute("src", imagesJSON.basePath + map.path);
}

init();

function init(){
    document.getElementById("refresh360").addEventListener("click", generate360);
    generate360();
}
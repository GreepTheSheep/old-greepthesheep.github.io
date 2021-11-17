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
        mapLinkElement = document.getElementById("backgroundMapLink"),
        backgroundElement = document.getElementById("backgroundSky"),
        mxURL = map.game == "tm2020" ? "trackmania.exchange" : "tm.mania.exchange";

    mapNameElement.innerText = map.name + " by " + map.author;
    backgroundElement.setAttribute("src", imagesJSON.basePath + map.path);
    backgroundElement.setAttribute("href", "https://"+mxURL+"/maps/"+map.mxID);
}

init();

function init(){
    document.getElementById("refresh360").addEventListener("click", generate360);
    generate360();
}
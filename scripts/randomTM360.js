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
        backgroundElement = document.getElementById("backgroundSky");
    let mxURL;

    switch (map.game) {
        case "tm2020":
            mxURL = "trackmania.exchange";
            break;
        case "tm2":
            mxURL = "tm.mania.exchange";
            break;
        case "sm":
            mxURL = "sm.mania.exchange";
            break;
        default:
            mxURL = "tm.mania.exchange";
            break;
    }

    mapNameElement.innerText = map.name + " by " + map.author;
    backgroundElement.setAttribute("src", imagesJSON.basePath + map.path);
    mapLinkElement.setAttribute("href", "https://"+mxURL+"/maps/"+map.mxID);
}

init();

function init(){
    document.getElementById("refresh360").addEventListener("click", generate360);
    generate360();
}
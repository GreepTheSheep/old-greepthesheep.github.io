function randomItem(array){
    return array[Math.floor(Math.random() * array.length)];
}

async function fetch360ImagesJSON(){
    const res = await fetch("/api/trackmaniabackgrounds.json"),
        json = await res.json();

    return json;
}

async function generate360(){
    const imagesJSON = await fetch360ImagesJSON(),
        game = Object.keys(imagesJSON),
        selectedGame = randomItem(game),
        map = randomItem(imagesJSON[selectedGame]),
        mapNameElement = document.getElementById("backgroundMapName"),
        mapLinkElement = document.getElementById("backgroundMapLink"),
        backgroundElement = document.getElementById("backgroundImg");
    let mxURL;

    switch (selectedGame) {
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
    backgroundElement.setAttribute("src", map.url);
    mapLinkElement.setAttribute("href", "https://"+mxURL+"/maps/"+map.mxID);
}

init();

function init(){
    document.getElementById("refreshbg").addEventListener("click", generate360);
    generate360();
}
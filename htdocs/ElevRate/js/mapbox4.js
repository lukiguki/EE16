window.onload = start();

function start() {
    const eBox = document.querySelector(".platser");
    const muffin = document.querySelector("#muffin");
    const url = "spara2.php";
    mapboxgl.accessToken =
        'pk.eyJ1IjoibHVraWd1a2kiLCJhIjoiY2pwYXkzOW96MDlsbDN4cGh3dHhoOXF5diJ9.xxVScqw15Zz0pXE0KqNT3g';
    let map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/streets-v9', // stylesheet location
        center: [18.07, 59.33], // starting position [lng, lat]
        zoom: 5 // starting zoom
    });
    map.on("click", addMarker);

    function addMarker(e) {
        let marker1 = new mapboxgl.Marker({
                draggable: true
            })
            .setLngLat(e.lngLat)
            .addTo(map);

        console.log(e.lngLat);
        /* eBox.innerHTML += "<tr><td>Long:" + e.lngLat.lng + "</td><td>" + e.lngLat.lat + "</td><td>Text</td></tr>"; */

        eBox.innerHTML += "<input name=\"koordinater[]\" type=\"text\" value=\"" + rund(e.lngLat.lng) + ", " + rund(e.lngLat.lat) + "\"><input name=\"beskrivningar[]\" type=\"text\" value=\"Beskrivning\">" + "\n";
    }

    muffin.addEventListener("click", spara);

    function spara() {
        let ajax = new XMLHttpRequest();
        ajax.addEventListener("loadend", svar);
        function svar() {
            console.log(this.responseText);
            if (this.responseText == "Sparad") {
                alert("Det funkade!");
            } else {
                alert("Det funkade inte att spara");
            }
        }
        ajax.open("POST", url, true);
        let formData = new FormData(eBox);
        ajax.send(formData);
    }
    function rund(tal) {
        return tal.toFixed(5);
    }
}
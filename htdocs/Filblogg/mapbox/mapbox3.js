window.onload = start();

function start() {
    const eBox = document.querySelector(".coordinates");

    mapboxgl.accessToken =
        'pk.eyJ1IjoibHVraWd1a2kiLCJhIjoiY2pwYXkzOW96MDlsbDN4cGh3dHhoOXF5diJ9.xxVScqw15Zz0pXE0KqNT3g';
    let map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/lukiguki/cjpb304hc09uk2st6kvss5dtl', // stylesheet location
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

        eBox.innerHTML += e.lngLat + "," + e.lngLat.lat + ",";
    }

}
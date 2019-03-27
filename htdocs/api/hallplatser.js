window.onload = start();

function start() {

    var lat = 59.337343;
    var lon = 18.047075;
    mapboxgl.accessToken =
        'pk.eyJ1IjoibHVraWd1a2kiLCJhIjoiY2pwYXkzOW96MDlsbDN4cGh3dHhoOXF5diJ9.xxVScqw15Zz0pXE0KqNT3g';
    let map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/streets-v9', // stylesheet location
        center: [lon, lat], // starting position [lng, lat]
        zoom: 10 // starting zoom
    });

    var nti = document.createElement('div');
    nti.className = 'marker';
    var marker = new mapboxgl.Marker(nti)
        .setLngLat([lon, lat])
        .addTo(map);

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showLocation);
    } else {
        console.log("Du har en gammal webbläsare");
    }

    function showLocation(position) {
        /*     var lat = position.coords.latitude;
            var lon = position.coords.longitude;
            console.log("Din position är: " + lat + ", " + lon); */

        /* kossigerar positionen rätt */

        /* omvandla till post */
        var formData = new FormData();
        formData.append("lat", lat);
        formData.append("lon", lon);

        /* skicka data till php */
        let ajax = new XMLHttpRequest();
        ajax.open("POST", "hallplatser.php", true);
        ajax.send(formData);

        ajax.addEventListener("loadend", fetchStops);

        function fetchStops() {
            var stopsJson = this.responseText;
            console.log(stopsJson);

            var stops = JSON.parse(stopsJson);

            stops.forEach(stop => {
                console.log("Hållplats: ", stop[0], stop[1], stop[2]);

                var popup = new mapboxgl.Popup({
                        offset: 25
                    })
                    .setText(stop[0]);

                var marker = new mapboxgl.Marker()
                    .setLngLat([stop[2], stop[1]])
                    .setPopup(popup)
                    .addTp(map);
            });
        }
    }
}
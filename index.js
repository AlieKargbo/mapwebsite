const btn = document.getElementById('find-me')

var mymap = L.map('mapid').setView([39.045753, -76.641273], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoic3VwMjAwMSIsImEiOiJja2FqM3UwcXIwNnZmMnFwamZ5bmNtdjRtIn0.jFb6Xm3zhBDtt5tbuvEuVQ'
}).addTo(mymap);

btn.addEventListener("click", () => {

    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };
    
    function success(pos) {
        var crd = pos.coords;
  
       alert('Your current position is:');
       alert(`Latitude : ${crd.latitude}`);
       alert(`Longitude: ${crd.longitude}`);
      alert(`More or less ${crd.accuracy} meters.`);
    }
  
    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }
  
    navigator.geolocation.getCurrentPosition(success, error, options);
  
})



var popup = L.popup()
.setLatLng([8.460555, -13.231722])
.setContent("I am a standalone popup.")
.openOn(mymap);


function onMapClick(e) {
    console.log("You clicked the map at " + e.latlng);
}

mymap.on('click', onMapClick)

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

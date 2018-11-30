var mymap = L.map('mapid').setView([34.027, -118.407], 10);

L.tileLayer('https://api.mapbox.com/styles/v1/shnoogen/cjp4kgiov42802sqobfclyot1/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic2hub29nZW4iLCJhIjoiY2pwMWdhcGphMDNpbzNybzRqcDVranc3bSJ9.xxCFgiNbPW4KL6DaK8spFQ', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18
}).addTo(mymap);

for ( let i = 0; i < places.length; i++) {
  L.marker( [ places[i].latitude, places[i].longitude ] )
  .bindPopup( '<h3>' + places[i].placeName + '</h3>' + '<p>' +
    places[i].descrip + '</p>')
  .addTo( mymap );
}

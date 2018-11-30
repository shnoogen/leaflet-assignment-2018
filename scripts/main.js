var mymap = L.map('mapid').setView([53.469, -7.362], 6);

L.tileLayer('https://api.mapbox.com/styles/v1/shnoogen/cjp1gofxn0oms2smt1ry1jg71/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic2hub29nZW4iLCJhIjoiY2pwMWdhcGphMDNpbzNybzRqcDVranc3bSJ9.xxCFgiNbPW4KL6DaK8spFQ', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18
}).addTo(mymap);

let marker1 = L.marker([55.240810, -6.511513]).addTo(mymap);
let marker2 = L.marker([51.929072, -8.570860]).addTo(mymap);
let marker3 = L.marker([53.344078, -6.256732]).addTo(mymap);
let marker4 = L.marker([54.601551, -5.921585]).addTo(mymap);

marker1.bindPopup("<b>Giant's Causeway, County Antrim</b><br>A natural formation of about 40,000 interlocking basalt columns.");
marker2.bindPopup("<b>The Blarney Stone, Cork</b><br>Legend has it, if you kiss the Blarney Stone, you receive the gift of gab.");
marker3.bindPopup("<b>The Book of Kells, Dublin</b><br>An illuminated manuscript housed in Trinity College Library.");
marker4.bindPopup("<b>The Big Fish, Belfast</b><br>A printed ceramic mosaic sculpture by John Kindness, a.k.a. the Salmon of Knowledge");

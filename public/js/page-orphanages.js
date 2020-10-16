
let map = L.map('mapid');

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async(pos)=>{
        map.setView([pos.coords.latitude, pos.coords.longitude], 15);
        L.tileLayer(
            'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        ).addTo(map);
    });
  } else {
    alert("Geolocalização não suportada no browser");
  }



function addMarker({id, name, lat, lng}){
    const icon = L.icon({
        iconUrl: 'images/map-marker.svg',
        iconSize: [58, 68],
        iconAnchor: [29, 68],
        popupAnchor: [170, 2]
    })
    
    const popup = L.popup({
        closeButton: false,
        className: "map-popup",
        minWidth: 240,
        minHeight: 240
    }).setContent(`${name} <a href='orphanage?id=${id}'> <img src='images/arrow-white.svg'> </a>`)
    
    L.marker([lat,lng], { icon })
    .addTo(map)
    .bindPopup(popup)
}

const orphanagesSpan = document.querySelectorAll(".orphanages span");
orphanagesSpan.forEach(span=>{
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    }
    addMarker(orphanage);
})
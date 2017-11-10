function myMap() {
var mapOptions = {
    center: new google.maps.LatLng(4.440393, -75.204473),
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.HYBRID
}
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}

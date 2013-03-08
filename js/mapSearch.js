$(document).ready(function(){



 // create variable for user search input
 var searchInput = $('#keyword');
 var addLookup = $('#search');
 var map;
 var geocoder;
 // add event listener for submit


  function initialize() {
     var geocoder = new google.maps.Geocoder();
     var mapOptions = {
        zoom: 4,
        center: new google.maps.LatLng(40.4230, -98.7372),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      map = new google.maps.Map(document.getElementById('map_canvas'),
          mapOptions);
   }

  initialize();

  addLookup.click(function(){
    var searchInputVal = searchInput.val();
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode( { 'address': searchInputVal}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
        });
      } else {
        alert("Geocode was not successful for the following reason: " + status);
        }
    });
  });




});






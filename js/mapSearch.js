$(document).ready(function(){



 // create variable for user search input
 var searchInput = $('#keyword');
 var addLookup = $('#search');
 var map;
 var geocoder;
 // add event listener for submit
 
 // Google CODE:

  //  function initialize() {
  //   geocoder = new google.maps.Geocoder();
  //   var latlng = new google.maps.LatLng(-34.397, 150.644);
  //   var mapOptions = {
  //     zoom: 8,
  //     center: latlng,
  //     mapTypeId: google.maps.MapTypeId.ROADMAP
  //   }
  //   map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
  // }


  function initialize() {
     var geocoder = new google.maps.Geocoder();
     var mapOptions = {
        zoom: 8,
        center: new google.maps.LatLng(-34.397, 150.644),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      map = new google.maps.Map(document.getElementById('map_canvas'),
          mapOptions);
   }

  initialize();

  addLookup.click(function(){
    var searchInputVal = searchInput.val();
    geocoder = new google.maps.Geocoder();
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

 // addLookup.click(function(){ 
 //    //get value of input
 //    searchInputVal = searchInput.val();
 //    console.log(searchInputVal);
 //    // create new geocode object by calling google api with user input
    
 //    lat_lng = geocoder.geocode({'address': searchInputVal}), function(results, status) {
 //      if (status == google.maps.GeocoderStatus.OK) {
 //        map.setCenter(results[0].geometry.location);
 //        var marker = new google.maps.Marker({
 //            map: map,
 //            position: results[0].geometry.location
 //        });
 //      } else {
 //        alert("Geocode was not successful for the following reason: " + status);
 //      }
 //    })
 //    console.log(lat_lng);
 // });
    
 // interpolate latlng into intialize function 







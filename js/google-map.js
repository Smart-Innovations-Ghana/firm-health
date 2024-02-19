var google;

function init() {
    var myLatlng = new google.maps.LatLng(40.69847032728747, -73.9514422416687);

    var mapOptions = {
        zoom: 7,
        center: myLatlng,
        scrollwheel: false,
        styles: [
            {
                "featureType": "administrative.country",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "hue": "#ff0000"
                    }
                ]
            }
        ]
    };

    var mapElement = document.getElementById('map');
    var map = new google.maps.Map(mapElement, mapOptions);
    
    var addresses = ['New York'];

    for (var x = 0; x < addresses.length; x++) {
        // $.getJSON('https://maps.googleapis.com/maps/api/geocode/json?address=' + addresses[x], function (data) {
            $.getJSON('https://maps.googleapis.com/maps/api/geocode/json?address=' + addresses[x] + '&key=YOUR_API_KEY', function (data) {
            // Check if 'geometry' property is present
            if (data.results && data.results[0] && data.results[0].geometry) {
                var p = data.results[0].geometry.location;
                var latlng = new google.maps.LatLng(p.lat, p.lng);
                new google.maps.Marker({
                    position: latlng,
                    map: map,
                    icon: 'images/loc.png'
                });
            } else {
                console.error('Invalid or missing data from the Geocoding API:', data);
            }
        });
    }
}

google.maps.event.addDomListener(window, 'load', init);










// var google;

// function init() {
//     var myLatlng = new google.maps.LatLng(40.69847032728747, -73.9514422416687);

//     var mapOptions = {
//         zoom: 7,
//         center: myLatlng,
//         scrollwheel: false,
//         styles: [
//             {
//                 "featureType": "administrative.country",
//                 "elementType": "geometry",
//                 "stylers": [
//                     {
//                         "visibility": "simplified"
//                     },
//                     {
//                         "hue": "#ff0000"
//                     }
//                 ]
//             }
//         ]
//     };

//     var mapElement = document.getElementById('map');
//     var map = new google.maps.Map(mapElement, mapOptions);
    
//     var addresses = ['New York'];

//     for (var x = 0; x < addresses.length; x++) {
//         $.getJSON('https://maps.googleapis.com/maps/api/geocode/json?address=' + addresses[x], function (data) {
//             var p = data.results[0].geometry.location;
//             var latlng = new google.maps.LatLng(p.lat, p.lng);
//             new google.maps.Marker({
//                 position: latlng,
//                 map: map,
//                 icon: 'images/loc.png'
//             });
//         });
//     }
// }

// google.maps.event.addDomListener(window, 'load', init);
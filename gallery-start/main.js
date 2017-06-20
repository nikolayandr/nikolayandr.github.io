var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */

var folder = "images/";

$.ajax({
    url : folder,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(jpe?g|png|gif)$/) ) {
                var newImage = document.createElement('img');
                newImage.setAttribute('src', folder + val);
                thumbBar.appendChild(newImage);
            }
        });
    }
});

/* Wiring up the Darken/Lighten button */


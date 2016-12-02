var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.use(bodyParser.json());

app.listen(3000, function() {
  console.log('listening on 3000')
})

const cars = [{
    id: 0,
    name: "Corvette",
    img1: "http://gmauthority.com/blog/wp-content/uploads/2015/09/2016-Chevrolet-Corvette-Stingray-in-Laguna-Blue-Tintcoat.jpg",
    img2: "http://www.wreckedexotics.com/images/3/500_o2264.jpg"
  }, {
    id: 1,
    name: "Hummer",
    img1: "http://cdn.pinthiscars.com/images/hummer-car-yellow-price-wallpaper-6.jpg",
    img2: "http://www.rickysgarage.net/100_4050.JPG"
  }, {
    id: 2,
    name: "Ford Mustang",
    img1: "http://o.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/750x422/quality/95/http://www.blogcdn.com/slideshows/images/slides/191/248/3/S1912483/slug/l/04-2015-ford-mustang-1.jpg",
    img2: "https://575717b777ff8d928c6b-704c46a8034042e4fc898baf7b3e75d9.ssl.cf1.rackcdn.com/5767678_mustang-crash-so-terrible-you-might-wanna_5984fc50_m.jpg?bg=342824"
  }];

  app.get('/cars/:id', function (req, res, next){
  res.send(cars[req.params.id])
})

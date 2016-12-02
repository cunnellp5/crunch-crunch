$(document).ready(initializePage);

var counter = 0;
var globalCarData = {};

function initializePage() {
    createEventHandler();
}

function createEventHandler() {
    $("#car-btn").click(showRandomCar);
}


function showRandomCar() {
    const randNum = getRandomIndex();
    if(counter === 0){
      getCarData(randNum);
    }
    else if (counter === 1) {
        $car = $("#car");
        $car.attr("src", globalCarData.img2);
        counter = 0;
    }



}

function getCarData(index) {


    $.getJSON(`http://localhost:3000/cars/${index}`)
        .done(data => {
                $car = $("#car");
                $car.attr("src", data.img1);
                globalCarData = data;
                counter += 1;



        })

    .fail(data => {
        console.log(data);
    });


}

function getRandomIndex() {

    min = Math.ceil(0);
    max = Math.floor(3);
    const randInt = Math.floor(Math.random() * (max - min)) + min;
    return randInt;
}

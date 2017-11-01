'use strict';


function pobierzDane() {

    $('button').after("<div id='dane-programisty'></div>");
    $.getJSON('http://echo.jsontest.com/imie/Piotr/nazwisko/Lewinski/zawod/Programista/firma/Akademia108', function (data) {
        document.getElementById('dane-programisty').innerHTML = data.firma + "<br/>" + data.imie + "<br/>" + data.nazwisko + "<br/>" + data.zawod;
        console.log(data);
    });



}
'use strict';

function ajax( ajaxOptions ){

window.onscroll = function () {
        var d = document.documentElement;
        var height = d.offsetHeight;
        var offset = d.scrollTop + window.innerHeight;




        if (offset >= height) {
            ajax({
                        type: "GET",
                        url: "https://jsonplaceholder.typicode.com/users",
                        onError: function (msg) {
                            console.log(msg);
                        },
                        onSuccess: function (response) {
                            var jsonObjArry = JSON.parse(response);
                            jsonObjArry.forEach(function (element) {
                                console.log(element);
                                var par = document.createElement('p');
                                par.innerHTML = element.name;
                                document.body.appendChild(par);
                            })
                        };
            }
                
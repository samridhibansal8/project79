menu_list_array = ["veg Margeritta pizzia",
"chicken tandoori pizza",
"veg supreme pizza",
"panner tikka pizza",
"dulexe vaggie pizza",
"veg extravaganza pizza",
"pepperoni pizza"];
    

function getmenu(){
var htmldata;
menu_list_array = ["veg Margeritta pizzia",
"chicken tandoori pizza",
"veg supreme pizza",
"panner tikka pizza",
"dulexe vaggie pizza",
"veg extravaganza pizza",
"pepperoni pizza"];}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.sort();

htmldata="<section class ='cards'>"
for( var i=0; i<menu_list_array.length; i++)
{
    htmldata = htmldata+'<div class="card">'
    +'<img src="pizzaImg.png"/>'
    +menu_list_array[i] + '</div>'

    htmldata = htmldata+"</section>"
    document.getElementById("display_addmenu").innerHTML = htmldata;
}



function add_top(){
var item= document.getElementById("add_item").value;
menu_list_array.push(item);
add_item();
}


function getmenu(){
    var htmldata;
   htmldata="<ol class='menulist'>"
   menu_list_array.sort();
   for( var i=0; i<menu_list_array.length; i++)
   htmldata = htmldata+ '<li>' + menu_list_array [i] '</li>'

   htmldata = htmldata+ "</ol>"
   document.getElementById("display_addmenu").innerHTML = htmldata;
}
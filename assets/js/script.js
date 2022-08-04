//creating a date variable so I can get the hours with the getHours() method
var d = new Date();
//function to get localStorage data
var getLocal = function () {
    for (var i = 9; i < 18; i++) {
        var plan = localStorage.getItem("plan" + i.toString());
        $("#text" + i.toString()).val(plan);
    }








}

//loop through 9 oclock till the current hour 
//and add the past class to the row
for (var i = 9; i < d.getHours(); i++) {
    //creating a time variable with the military time format for the id 
    //appending eacch new hour targeting the time id plus military time
    var time = $("#time" + i.toString());
    //adding the past class to turn it grey
    time.addClass("past");




}
//targeting the present hour each id is military format
var present = d.getHours();
//targeting the time id 
var time = $("#time" + present.toString());

time.addClass("present");

for (var i = d.getHours(); i < 18; i++) {
    var time = $("#time" + i.toString());
    console.log(d.getHours());
    time.addClass("future");

}
//creating an onclick function for button 9-17 to store the values
$("#btn9").on("click", function () {

    var textPlan = $("#text9").val();
    localStorage.setItem("plan9", textPlan);




});
$("#btn10").on("click", function () {

    var textPlan = $("#text10").val();
    localStorage.setItem("plan10", textPlan);




});
$("#btn11").on("click", function () {

    var textPlan = $("#text11").val();
    localStorage.setItem("plan11", textPlan);




});
$("#btn12").on("click", function () {

    var textPlan = $("#text12").val();
    localStorage.setItem("plan12", textPlan);




});

$("#btn13").on("click", function () {

    var textPlan = $("#text13").val();
    localStorage.setItem("plan13", textPlan);




});
$("#btn14").on("click", function () {

    var textPlan = $("#text14").val();
    localStorage.setItem("plan14", textPlan);




});
$("#btn14").on("click", function () {

    var textPlan = $("#text14").val();
    localStorage.setItem("plan14", textPlan);




});
$("#btn15").on("click", function () {

    var textPlan = $("#text15").val();
    localStorage.setItem("plan15", textPlan);




});
$("#btn16").on("click", function () {

    var textPlan = $("#text16").val();
    localStorage.setItem("plan16", textPlan);




});
$("#btn17").on("click", function () {

    var textPlan = $("#text17").val();
    localStorage.setItem("plan17", textPlan);




});
getLocal();
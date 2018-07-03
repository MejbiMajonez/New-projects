$(document).ready(function () {
  go_kwadracik();
  alert("This game is yet to be finished, sorry to keep you waiting");

});

function go_kwadracik() {
  grafika();
  rusz_mnie();
  boom();
  zmien_size();
  takise();
  szybciej();
  chlopek();
}
//grafika na starcie
function grafika(){
  $('#dupa').addClass("grafika");
  setTimeout(function schowaj(){$(".grafika").fadeOut(1000);},3000);

}
//poruszanie się kwadracika
function rusz_mnie() {
  $(document).on('keydown', function (event) {

    var key = event.which;
    var peniz = $('#kwadrat');
    var Szwynia ="-=1"
    var Wiepsz ="+=1"
    if(key == 37 && parseInt(peniz.css('left')) > 0){
      peniz.css('left', Szwynia);
    }else if(key == 38 && parseInt(peniz.css('top')) > 0){
      peniz.css('top', Szwynia);
    }else if(key == 39 && parseInt(peniz.css('left')) < 788){
      peniz.css('left', Wiepsz);
    }else if(key == 40 && parseInt(peniz.css('top')) < 388){
      peniz.css('top', Wiepsz);
  }
});
}
//eksplozja
function boom() {
  $(document).on('keydown', function (event) {

    var key = event.which;
    var kutaz = $('#kwadrat');
    if(key == 32){
  $( "#kwadrat" ).toggle( "explode" );
  $("#kwadrat").fadeIn(3000);
  $("#kwadrat").addClass("kwadracik1");
  $("#kwadrat").removeClass("kwadracik");
};
});
}
//input po wpisaniu Geek pojawia się logo GF
function takise() {
  $(document).on('keydown', function (event) {
    var key = event.which;
    if(key == 80){
    $("#Geek").addClass("cfel2");
    $("#knefel1").addClass("knefel2");
    $("#knefel1").append("GO!");

  }
});
}
//input z logiem geekfactory
function odczyt(){
  fjut = $('#Geek').val();
  if(fjut == "Geek"){
$("#container").addClass("GF");
}else{
  alert('Nie tym razem, Danielu, pisz to Geek!')
}
}
// zmiana rozmiaru
function zmien_size(){
  $(document).on('keydown', function(){
    let key = event.which;
    if(key == 67){
      $('#kwadrat').toggleClass('kwadracik duzy_kwadrat');
    }
  });
}
//przyśpieszenie
function szybciej() {
  $(document).on('keydown', function (event) {

    var key = event.which;
    var dupsko = $('.duzy_kwadrat');

    if(key == 37 && parseInt(dupsko.css('left')) > 0){
      dupsko.css('left', '-=5px');
    }else if(key == 38 && parseInt(dupsko.css('top')) > 0){
      dupsko.css('top', '-=5px');
    }else if(key == 39 && parseInt(dupsko.css('left')) < 788){
      dupsko.css('left', '+=5px');
    }else if(key == 40 && parseInt(dupsko.css('top')) < 388){
      dupsko.css('top', '+=5px');
    }else if(key == 84){
  $('#kwadrat').toggleClass('kwadracik ziom duzy_kwadrat ');
}
  });
}
//chlopek
function chlopek() {
  $(document).on('keydown', function (event) {

    var key = event.which;
    var hui = $('.ziom');

    if(key == 37 && parseInt(hui.css('left')) > 0){
      hui.css({'transform' : 'rotate('+ 0 +'deg)'});
    }else if(key == 38 && parseInt(hui.css('top')) > 0){
      hui.css({'transform' : 'rotate('+ 90 +'deg)'});
    }else if(key == 39 && parseInt(hui.css('left')) < 788){
      hui.css({'transform' : 'rotate('+ -180 +'deg)'});
    }else if(key == 40 && parseInt(hui.css('top')) < 388){
      hui.css({'transform' : 'rotate('+ 270 +'deg)'});
}
  });
}

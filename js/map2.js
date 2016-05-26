$(function(){
	$('#menu').slicknav();
});
function initialize() {
  var myLatlng = new google.maps.LatLng(25.7370043,-100.3174208); //coordenadas de ubicación
  var wrapMap= new google.maps.LatLng(25.7307723,-100.3196479);//cordenadas para centrar
  var uanl = new google.maps.LatLng(25.7238185,-100.3148604); //coordenadas de uanl
  var tbc = new google.maps.LatLng(25.7369555,-100.3135275,3); //coordenadas de the beer factory
  var mapOptions = {
// This is where you would paste any style found on Snazzy Maps.
styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}],
  zoom: 15, //zoom de tu mapa
  center: wrapMap, //centrar tu mapa
  scrollwheel: false, //si colocas true en vez de false el usuario podrá hacer scroll dentro del mapa
  draggable: true, //esta opción es la manito que aparece y es usado para desplazarse en el mapa
  mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById('map2'), mapOptions);
  var contentString = '<p style="color:#212121; font-family:"raleway-bold",sans-serif" >Av. Central 734 <br>Col. Chapultepec, 66450 <br>San Nicolás de los Garza, N.L.</p>';//imagen y dirección
  var infowindow = new google.maps.InfoWindow({content: contentString});
  var marker = new google.maps.Marker({
  position: myLatlng,
  animation:google.maps.Animation.DROP,
  icon: 'img/logo.png', //icono de mapa
  map: map
  });
  var marker = new google.maps.Marker({
  position: uanl,
  animation:google.maps.Animation.DROP,
  icon: 'img/uanl2.png', //icono de mapa
  map: map
  });
  var marker = new google.maps.Marker({
  position: tbc,
  animation:google.maps.Animation.DROP,
  icon: 'img/tbc.png', //icono de mapa
  map: map
  });
  google.maps.event.addListener(marker, 'click', function() {
  infowindow.open(map,marker);
  });
}
google.maps.event.addDomListener(window, 'load', initialize);

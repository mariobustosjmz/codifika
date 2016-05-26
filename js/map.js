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
                                        styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}],
  zoom: 15, //zoom de tu mapa
  center: wrapMap, //centrar tu mapa
  scrollwheel: false, //si colocas true en vez de false el usuario podrá hacer scroll dentro del mapa
  draggable: true, //esta opción es la manito que aparece y es usado para desplazarse en el mapa
  mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  var contentString = '<p style="color:#212121; font-family:"raleway-bold",sans-serif" >Av. Central 734 <br>Col. Chapultepec, 66450 <br>San Nicolás de los Garza, N.L.</p>';//imagen y dirección
  var infowindow = new google.maps.InfoWindow({content: contentString});
  var marker = new google.maps.Marker({
  position: myLatlng,
  animation:google.maps.Animation.DROP,
  icon: 'img/logo.png', //icono de mapa
  map: map
  });
  var marker = new google.maps.Marker({
  position: tbc,
  animation:google.maps.Animation.DROP,
  icon: 'img/tbc.png', //icono de the beer company
  map: map
  });
  var marker = new google.maps.Marker({
  position: uanl,
  animation:google.maps.Animation.DROP,
  icon: 'img/uanl.png', //icono de mapa
  map: map
  });
  google.maps.event.addListener(marker, 'click', function() {
  infowindow.open(map,marker);
  });
}
google.maps.event.addDomListener(window, 'load', initialize);

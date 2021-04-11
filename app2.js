function initMap() {
  // The location of Uluru
  const uluru = { lat: -34.6083, lng: -58.3712 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: uluru,
  });

  // Ubicación de los locales
  // LOCAL DE NUÑEZ
  const localNunez = new google.maps.Marker({
    position: {
      lat: -34.54179156359598,
      lng: -58.467931365380664,
    },
    map: map,
  });
  // LOCAL DE COLEGIALES
  const localColegiales = new google.maps.Marker({
    position: {
      lat: -34.578348778131584,
      lng: -58.44891855825333,
    },
    map: map,
  });
  // LOCAL DE CABALLITO
  const localCaballito = new google.maps.Marker({
    position: {
      lat: -34.617117207892896,
      lng: -58.43383389269026,
    },
    map: map,
  });
  // LOCAL DE VICENTE LOPEZ
  const localVteLopez = new google.maps.Marker({
    position: {
      lat: -34.49916957515628,
      lng: -58.494618999972204,
    },
    map: map,
  });
  // LOCAL DE LA MATANZA
  const localMatanza = new google.maps.Marker({
    position: {
      lat: -34.68128414558699,
      lng: -58.56030903830062,
    },
    map: map,
  });
}

function initMap() {
  // Coordenadas principales
  const uluru = { lat: -34.5417, lng: -58.4679 };
  // Insertando el mapa
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: uluru,
  });

  // Ubicación de los locales
  // Funcion que define el template para cada iniciación de marcador
  const nuevoMarcador = (lugar) => {
    let marcador = new google.maps.Marker({
      position: lugar.coordenadas,
      map: map,
    });
    // ---SIN USO: Solo disponible para usuarios de google cloud. Esta declaración define la añadidura de info al pin de ubicación--- //
    if (lugar.content) {
      let infoWindow = new google.maps.infoWindow({
        content: lugar.content,
      });
      marcador.addListener("click", () => infoWindow.open(map, marcador));
    }
  };

  //ARRAY DE LOCALES
  let locales = [
    // local Nuñez
    { coordenadas: { lat: -34.54179156359598, lng: -58.467931365380664 } },
    // local Colegiales
    { coordenadas: { lat: -34.578348778131584, lng: -58.44891855825333 } },
    // local Caballito
    { coordenadas: { lat: -34.617117207892896, lng: -58.43383389269026 } },
    // local Vte. Lopez
    { coordenadas: { lat: -34.49916957515628, lng: -58.494618999972204 } },
    // local La Matanza
    { coordenadas: { lat: -34.68128414558699, lng: -58.56030903830062 } },
  ];

  locales.forEach((local) => nuevoMarcador(local));
}

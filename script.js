// Função para inicializar o mapa
function initMap() {
    const belémDoPará = { lat: -1.455545, lng: -48.490180 };
    
    const map = new google.maps.Map(document.getElementById('map'), {
        center: belémDoPará,
        zoom: 15,
    });
    
    const marker = new google.maps.Marker({
        position: belémDoPará,
        map: map,
        title: "Ponto de Coleta em Belém do Pará",
    });
}

// Carrega a API do Google Maps
function loadMapScript() {
    const script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBvA1QfoBRyopv841h3uIJx2M9DKD3SmGE&callback=initMap'
    script.defer = true;
    script.async = true;
    document.head.appendChild(script);
}

loadMapScript();
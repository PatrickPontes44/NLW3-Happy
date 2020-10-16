
const cityDOM = document.querySelector("#city");
const stateDOM = document.querySelector("#state");


function getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleSuccess,handleError);
    } else {
      stateDOM.innerHTML = "Geolocalização não suportada no browser";
    }
  }
  
  const handleSuccess = async position => {
      const {latitude, longitude} = position.coords;
      const response = await fetch(`https://geocode.xyz/${latitude},${longitude}?geoit=json`);
  
      // SUGIRO QUE VOCÊ DÊ UMA OLHADA NO OBJETO DATA, TEM MUITA INFORMAÇÃO LEGAL NELE.
  
      const data = await response.json();
      const { postal:cep, staddress:endereco, region:municipio } = data;
      const { name:bairro } = data.osmtags;
  
      // Resultados como cep, endereço e número da casa serão aproximados.
    //   console.log(`CEP: ${cep}, rua: ${endereco}, municipio: ${municipio}, bairro: ${bairro}`);
      cityDOM.innerHTML = bairro;
      stateDOM.innerHTML = municipio
  
      //AQUI VOCÊ PODE USAR DA FORMA COMO QUISER ESSES DADOS.
  }
  
  const handleError = error => {
      let errorMessage;
      switch(error.code) {
        case error.PERMISSION_DENIED:
          errorMessage = "Usuário recusou a solicitação para a Geolocalização.";
          break;
        case error.POSITION_UNAVAILABLE:
          errorMessage = "A informação sobre a Geolocalização está indisponível."
          break;
        case error.UNKNOWN_ERROR:
          errorMessage = "Ocorreu um erro desconhecido ao buscar seu local."
          break;
      }
      stateDOM.innerHTML = error
      
      //FAÇA ALGUMA COISA COM A MENSAGEM DE ERRO
      console.log(errorMessage)
  }
  
  
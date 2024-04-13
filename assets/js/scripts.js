// función asincrónica para obtener datos de una URL
const contenedorURL = async () => {
    
    const url = "https://jsonplaceholder.typicode.com/photos/";
    // Solicitud a la URL usando fetch
    const response = await fetch(url); // Conexión a la URL con fetch
    // Convirtiendo la respuesta a formato JSON
    const data = await response.json();
  //   
  
    // Inicializo un contador para limitar el número de fotos a mostrar
    let contador = 0;
    // Iterar sobre cada foto en los datos obtenidos
    data.forEach((foto) => {
      if (contador < 20) {
        console.log(`${foto.id} título: ${foto.title}`);
        contador++; // Incrementar el contador
      }
    });
  };
  
  // Se crea una promesa que se resuelve después de 3 segundos
  const retornarPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Informacion Enviada"); 
    }, 3000); 
  });
  
  const recibirMensajePromesa = async () => {
      try {
        // Esperar a que la promesa se resuelva y recibir el mensaje
        const mensaje = await retornarPromesa;
        console.log(mensaje);
      } catch (error) {
        console.error("Error al recibir el mensaje de la promesa:", error);
      }
    };
    
    // Llamar a la función para obtener y mostrar los datos de la URL
    contenedorURL();
    
    // Llamar a la función para recibir el mensaje de la promesa
    recibirMensajePromesa();
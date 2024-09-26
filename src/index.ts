/* ******************************************************************************* */
/*   File: index.ts                                                         */
/*                                                    ::::::::::       :;     ;:   */
/*                                                   |;                :;    ;:    */
/*                                                  |;                 :;   ;:     */
/*   By: Pablo Camino Vázquez                      |;                  :;  ;:      */
/*                                                |;                   :; ;:       */
/*   Created: 2024/09/26 17:47                   |::::::::::::   :+:   ;;;         */
/*   Updated: 2024/09/26 17:47                                              */
/*                                                                                 */
/* ******************************************************************************* */
function greet(name: string): void {
  const greeting = `Hello, ${name}!`;
  const element = document.getElementById("greeting");
  if (element) {
    element.innerText = greeting;
  }
}

greet("World");

document.addEventListener('DOMContentLoaded', () => {

  const submitButton = document.getElementById('submitButton') as HTMLButtonElement;
  const messageInput = document.getElementById('messageInput') as HTMLInputElement;
  const cardContainer = document.getElementById('cardContainer');

  // Función para enviar mensaje y retornar una promesa
  function enviarMensaje(mensaje: string): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (mensaje.trim()) {
          resolve(mensaje);
        } else {
          reject('El mensaje no puede estar vacío');
        }
      }, 800);
    });
  }

  // Función para obtener una imagen aleatoria de Picsum
  function obtenerImagenAleatoria(): Promise<string> {
    return fetch('https://picsum.photos/200/300') // Llamada a la API de Picsum para obtener una imagen aleatoria
      .then((response) => response.url) // Retorna la URL de la imagen
      .catch(() => {
        throw new Error('No se pudo cargar la imagen.');
      });
  }

  // Evento al presionar el botón
  submitButton.addEventListener('click', () => {
    const mensaje = messageInput.value as string;

    Promise.all([enviarMensaje(mensaje), obtenerImagenAleatoria()])
      .then(([respuesta, imageUrl]) => {
        const newCard = document.createElement('ion-card');
        newCard.innerHTML = `
          <img src="${imageUrl}" alt="Imagen aleatoria" />
          <ion-card-content>${respuesta}</ion-card-content>
        `;
        cardContainer?.appendChild(newCard);
        messageInput.value = '';
      })
      .catch((error) => {
        console.error(error);
        alert(error);
      });
  });
});
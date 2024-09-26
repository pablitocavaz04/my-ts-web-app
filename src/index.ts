/* ******************************************************************************* */
/*   File: index.ts                                                                */
/*                                                    ::::::::::       :;     ;:   */
/*                                                   |;                :;    ;:    */
/*                                                  |;                 :;   ;:     */
/*   By: Pablo Camino Vázquez                      |;                  :;  ;:      */
/*                                                |;                   :; ;:       */
/*   Created: 2024-09-26                          |::::::::::::   :+:   ;;;         */
/*   Updated: 2024-09-26                                      */
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


function enviarMensaje(mensaje: string): Promise<string> {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      if (Math.random()<0.2) {
        resolve(`${mensaje}`);
      } else {
        reject('Ha ocurrido un error inesperado');
      }
    }, 1000);
  });
}

submitButton.addEventListener('click', () => {

  const mensaje = messageInput.value as string;
  if( !mensaje || mensaje=="")
    alert("El mensaje no puede estar vacío");
  else
    enviarMensaje(mensaje)
      .then((respuesta) => {
    
        const newCard = document.createElement('ion-card');
        newCard.innerHTML = `<ion-card-content>${respuesta}</ion-card-content>`;
        cardContainer?.appendChild(newCard);

        messageInput.value = '';
      })
      .catch((error) => {
        console.error(error);
      });
    });
});
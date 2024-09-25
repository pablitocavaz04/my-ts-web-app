/* ******************************************************************************* */
/*   File: index.ts                                                                */
/*                                                    ::::::::::       :;     ;:   */
/*                                                   |;                :;    ;:    */
/*                                                  |;                 :;   ;:     */
/*   By: Pablo Camino Vázquez                      |;                  :;  ;:      */
/*                                                |;                   :; ;:       */
/*   Created: 2024/09/25 17:53                   |::::::::::::   :+:   ;;;         */
/*   Updated: 2024/09/25 17:53                                              */
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

// Lógica para el input y el botón
const inputElement = document.getElementById('messageInput') as HTMLInputElement;
const buttonElement = document.getElementById('submitButton');
const cardContainer = document.getElementById('cardContainer');

if (buttonElement && inputElement && cardContainer) {
  buttonElement.addEventListener('click', () => {
    const message = inputElement.value?.toString().trim();
    if (message) {
      // Crear una carta con el mensaje
      const card = document.createElement('ion-card');
      const cardContent = document.createElement('ion-card-content');
      cardContent.textContent = message;
      card.appendChild(cardContent);

      // Añadir la carta al contenedor
      cardContainer.appendChild(card);

      // Limpiar el input después de enviar
      inputElement.value = '';
    }
  });
}



const gifts = ["Muñeca", "Carro de juguete", "Rompecabezas", "Lego", "Pelota"];

function findGift(gifts, giftName, index = 0) {
    // TODO: Caso base - si llegamos al final de la lista
    if (index === gifts.length) {
        return `${giftName} no está en la lista.`;
    }

    // TODO: Caso base - si encontramos el regalo
    if (gifts[index] === giftName) {
        return `${giftName} está en la posición ${index}`;
    }

    // TODO: Llamada recursiva para seguir buscando
    return findGift(gifts, giftName, index + 1);
}

// Pruebas
let giftToFind = "Lego";
console.log(findGift(gifts, giftToFind)); // Debería encontrar "Lego"

giftToFind = "Camión";
console.log(findGift(gifts, giftToFind)); // No está en la lista

giftToFind = "Pelota";
console.log(findGift(gifts, giftToFind));
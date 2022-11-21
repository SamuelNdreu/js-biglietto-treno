/**
 *  - il prezzo del biglietto è definito in base ai km (0.21 € al km)
    - va applicato uno sconto del 20% per i minorenni
    - va applicato uno sconto del 40% per gli over 65.
 */

const userKilometres = parseInt = prompt ('Insert how many kilometers will you make');
console.log(userKilometres);

const userAge = parseInt = prompt ('Insert your age here');
console.log(userAge);

const ticketPrice = userKilometres * 0.21;
console.log(ticketPrice);

let totalPrice = 'Buy ticket for: ' + ticketPrice;

if (userAge < 18){
    const underageDiscount = ticketPrice * 0.20;
    totalPrice = ticketPrice - underageDiscount;
    console.log(totalPrice);
}else if (userAge > 65){
    const underageDiscount = ticketPrice * 0.40;
    totalPrice = ticketPrice - underageDiscount;
    console.log(totalPrice);
}

document.getElementById('ticket').innerHTML= 'Buy ticket for: ' + totalPrice + "\44";



/*Author: Abdullah Ben Messaoud
Date: 19.11.2025*/
const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

function setClock() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondDeg = ((seconds / 60) * 360) + 90; // +90 for initial rotation offset
  const minuteDeg = ((minutes / 60) * 360) + ((seconds/60)*6) + 90;
  const hourDeg = ((hours % 12) / 12 * 360) + ((minutes/60)*30) + 90;

  secondHand.style.transform = `rotate(${secondDeg}deg)`;
  minHand.style.transform = `rotate(${minuteDeg}deg)`;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(setClock, 1000);
setClock(); // run immediately

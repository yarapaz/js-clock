'use strict';

//We bring the divs we have to move
const secondHand = document.querySelector('.second_hand');
const minHand = document.querySelector('.min_hand');
const hourHand = document.querySelector('.hour_hand');

function setDate() {
  //Get hours, minutes and seconds from my current time
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  //Calculate the degrees the div must run according to the current time and offset the initial 90 degs we stablished to start the clock at 12:00 PM
  //Rule of 3 (in Spanish): seconds to 60 seconds is equal to how many degrees if the total is 360??
  const secondsDegrees = (seconds * 360) / 60 + 90;
  const minsDegrees = (minutes * 360) / 60 + 90;
  const hoursDegrees = (hours * 360) / 12 + 90;

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minHand.style.transform = `rotate(${minsDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000); //It runs the function with an interval of a second

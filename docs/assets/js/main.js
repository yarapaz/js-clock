"use strict";const secondHand=document.querySelector(".second_hand"),minHand=document.querySelector(".min_hand"),hourHand=document.querySelector(".hour_hand");function setDate(){const e=new Date,t=360*e.getSeconds()/60+90,n=360*e.getMinutes()/60+90,o=360*e.getHours()/12+90;secondHand.style.transform=`rotate(${t}deg)`,minHand.style.transform=`rotate(${n}deg)`,hourHand.style.transform=`rotate(${o}deg)`}setInterval(setDate,1e3);
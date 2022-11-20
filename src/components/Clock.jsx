//import  "./time.jsx";
import React, { useState, useEffect } from "react"
const Clock = ()=>{
     const [hora, setHora] = useState(0);
     const [minutos, setMinutos] = useState(0);
     const [segundos, setSegundos] = useState(0);

     useEffect(() => {
         setInterval(() => {
              var date = new Date(); 
              var segundo = date.getSeconds();
              setSegundos(segundo*6);
              var minuto = date.getMinutes();
              setMinutos(minuto*6);
              var hora = date.getHours();
              setHora(hora*30);              
         });
       });

    return(
      <div className="clock">
      <div className="number number1">1</div>
      <div className="number number2">2</div>
      <div className="number number3">3</div>
      <div className="number number4">4</div>
      <div className="number number5">5</div>
      <div className="number number6">6</div>
      <div className="number number7">7</div>
      <div className="number number8">8</div>
      <div className="number number9">9</div>
      <div className="number number10">10</div>
      <div className="number number11">11</div>
      <div className="number number12">12</div>
      <div className="hand hour" id='hour' data-hour-hand style={{transform: `translateX(-50%) rotate(${hora}deg)`}}></div>
      <div className="hand minute" id='minute' style={{transform: `translateX(-50%) rotate(${minutos}deg)`}}  data-minute-hand ></div>
      <div className="hand second"id='second' style={{transform: `translateX(-50%) rotate(${segundos}deg)`}}  data-second-hand></div>
    </div>
    )
}
export default Clock;
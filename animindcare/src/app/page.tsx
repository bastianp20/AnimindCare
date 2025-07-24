'use client'; 
import React from 'react'; 
import Tarjetas from './components/tarjetas'
import  Footer  from './components/footer';
import { tarjetaData } from './data/tarjeta_data';
export default function Homepage(){
  return(
  <main>
    <div className='tarjeta_hijo'>
      {tarjetaData.map((tarjeta, idx) => (
        <Tarjetas key={idx} {...tarjeta}/>
      ))}
    </div>
    <Footer />
  </main>
);
}




'use client';
import React, { useState } from 'react';
import Tarjetas from './components/tarjetas';
import Footer from './components/footer';
import Header from './components/Header';
import { tarjetaData } from './data/tarjeta_data';
import LoginModal from './components/loginModal';

export default function Homepage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // constante pa abrir el modal
  const abrirModal = () => setIsModalOpen(true);

  // esto es para que se active el modal al pinchar sobre acceso veterinario
  const cardsWithHandlers = tarjetaData.map(card => {
    if (card.title === 'Acceso Veterinario') {
      return { ...card, onClick: abrirModal };
    }
    return card;
  });

  return (
    <main>
      <Header />

      <div className="tarjeta_hijo">
        {cardsWithHandlers.map((tarjeta, idx) => (
          <Tarjetas key={idx} {...tarjeta} />
        ))}
      </div>

      <LoginModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <Footer />
    </main>
  );
}

'use client';

import { useState } from 'react';
import styles from '../styles/index.module.css';
import modalStyles from '../styles/index_modal.module.css';

export default function Home() {
  const [mostrarModal, setMostrarModal] = useState(false);

  return (
    <main>
      {/* ENCABEZADO */}
      <div className={styles.encabezado}>
        <div className={styles['encabezado-texto']}>Animind Care+</div>
      </div>

      {/* CARRUSEL */}
      <section className={styles.carrusel}>
        <div className={styles.card}>
          <i className="fas fa-notes-medical"></i>
          <h4>Historial Médico</h4>
          <a href="">Ver detalles</a>
        </div>
        <div className={styles.card}>
          <i className="fas fa-user-md"></i>
          <h4>Acceso Veterinario</h4>
          <a href="" onClick={() => setMostrarModal(true)}>
            Ingresar
          </a>
        </div>
        <div className={styles.card}>
          <i className="fas fa-dog"></i>
          <h4>Perfil Mascota</h4>
          <a href="">Carnet digital</a>
        </div>
        <div className={styles.card}>
          <i className="fas fa-file-medical-alt"></i>
          <h4>Informes y Recetas</h4>
          <a href="">Consultar</a>
        </div>
        <div className={styles.card}>
          <i className="fas fa-star"></i>
          <h4>Califica Veterinarios</h4>
          <a href="">Valorar</a>
        </div>
        <div className={styles.card}>
          <i className="fas fa-shopping-cart"></i>
          <h4>Marketplace</h4>
          <a href="">Explorar</a>
        </div>
      </section>

      {/* MODAL */}
      {mostrarModal && (
        <div className={modalStyles.ventana}>
          <div className={modalStyles['ventana-contenido']}>
            <span
              className={modalStyles.cerrar}
              onClick={() => setMostrarModal(false)}
            >
              &times;
            </span>
            <h2>🐾 Inicio de Sesión Veterinario 🐾</h2>

            <hr
              style={{
                margin: '1.5rem 0',
                border: 'none',
                borderTop: '1px solid #ccc',
              }}
            />

            <form method="post" action="/api/login">
              <input
                type="email"
                name="email"
                placeholder="Correo Electrónico"
                required
              />
              <input
                type="password"
                name="contraseña"
                placeholder="Contraseña"
                required
              />
              <button className="boton-login" type="submit">
                Ingresar
              </button>
            </form>

            <div className="login-links">
              <a href="">¿Olvidaste tu contraseña?</a>
              <br />
              <a href="/registro_veterinarios">
                ¿No tienes cuenta? ¡Regístrate Gratis!
              </a>
            </div>
          </div>
        </div>
      )}

      {/* PIE DE PÁGINA */}
      <footer className={styles.pie}>Animind Care+ ® Marca registrada</footer>
    </main>
  );
}

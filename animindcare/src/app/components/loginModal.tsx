import styles from '../../styles/loginModal.module.css';
import Link from 'next/link'; 

interface LoginModalProps {
  isOpen: boolean;      
  onClose: () => void;  
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  // Si el modal está cerrado, no mostramos nada
  if (!isOpen) return null;

  // Función que cierra el modal si haces clic fuera de la caja blanca
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`${styles.ventana} ${isOpen ? styles.abierto : ''}`}
      onClick={handleOverlayClick}
    >
      <div className={styles['ventana-contenido']}>
        {/* Botón "X" para cerrar */}
        <span className={styles.cerrar} onClick={onClose}>
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
          <button className={styles['boton-login']} type="submit">
            Ingresar
          </button>
        </form>

        <div className={styles['login-links']}>
          <Link href="">¿Olvidaste tu contraseña?</Link>
          <br />
          <Link href="/registrovet">
            ¿No tienes cuenta? ¡Regístrate Gratis!
          </Link>  
        </div>
      </div>
    </div>
  );
}

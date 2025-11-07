'use client'; 
import styles from '../../styles/formularioreg.module.css'; 
import { useState } from 'react';


export default function Registrovet(){
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // con esto nos aseguramos de que la pagina no se recargue una vez enviamos el formulario
    // y le agregamos un if para validar q las contraseñas coincidan.
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();  
            if (password !== confirmPassword){
                alert('las contraseñas no coinciden'); 
            }
    }

    return(
        <form onSubmit={handleSubmit}>
        <div className={styles['formulario-registro']}> 
        <h2> Registro Vet </h2>
        <input type='text' placeholder='Nombres'></input>
        <input type='text' placeholder='Apellidos'></input>
        <input type='email' placeholder='Correo Electronico'></input>
        <input type='password' value={password} placeholder='Contraseña' onChange={(e) => setPassword(e.target.value)} required ></input>
        <input type='password' value={confirmPassword} placeholder='Escriba nuevamente la contraseña' onChange={(e) => setConfirmPassword(e.target.value)} required></input>
        <button type='submit'> Enviar </button>
        </div>
        </form>
    )
}
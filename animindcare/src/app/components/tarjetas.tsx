import styles from '../../styles/tarjetas.module.css';
import { link } from "fs";
import React from 'react'; 
import { IconType } from "react-icons";
import Link from 'next/link';
interface tarjetaprops{
    Icon: IconType; 
    title: string; 
    onClick?: () => void; 
    linkText: string; 
    href?: string; 
}


export default function Tarjetas({Icon : Icon, title, onClick, linkText, href}: tarjetaprops){
    return(
        <div className={styles.tarjeta}>
            <Icon size={32} />
            <h2>{title}</h2>
        {href ? (
        <Link href={href} className={styles.boton}>
            {linkText}
        </Link>
        ) : (
        <button onClick={onClick} className={styles.boton}>
            {linkText}</button>
        )}
        </div>)}
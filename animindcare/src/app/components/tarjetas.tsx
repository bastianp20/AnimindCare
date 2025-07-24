import style from '../../styles/tarjetas.module.css';
import { link } from "fs";
import React from 'react'; 
import { IconType } from "react-icons";
interface tarjetaprops{
    Icon: IconType; 
    title: string; 
    onClick?: () => void; 
    linkText: string; 
    href?: string; 
}


export default function Tarjetas({Icon : Icon, title, onClick, linkText, href}: tarjetaprops){
    return(
        <div className={style.tarjeta}>
            <Icon size={32} />
            <h2>{title}</h2>
            {href ?(
                <a onClick={onClick}>
                    {linkText}
                </a>
            ):(
                <button onClick={onClick}>{linkText}</button>
            )}
        </div>
    );
}
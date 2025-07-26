import styles from '../../styles/index.module.css'; 

export default function Header(){
    return(
        <div className={styles.encabezado}>
            <div className={styles['encabezado-texto']}> Animind Care+ </div>
        </div>
    ); 

}
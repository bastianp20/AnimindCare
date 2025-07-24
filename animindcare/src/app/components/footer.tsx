import  styles  from '../../styles/footer.module.css'; {/* se le pone ../.. / para que suba los 2 subniveles hasta la carpeta styles*/}
export default function Footer(){
    return(
        <div className={styles.pie}>
            Animind Care+ ® Marca registrada
        </div>
    )
}
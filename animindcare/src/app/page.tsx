'use cliente'; 
import styles from '..src/styles/index.module.css'

export default function HomePage(){
  return (
    <main className={styles.contenedor_main}> {/* esto abarca todo, como un contenedor de todo*/ }
    <header className={styles.encabezado}> {/* encabezado de la pagina */ }
      <h1 className={styles.encabezadoTexto}> Animind Care+</h1> {/*le ponemos belleza al encabezado del texto*/ }
    </header>
    </main>
  )
}
import styles from './styles.module.css';

const Galeria = () => {
    return(
        <div className={styles.galeria}>
            <h3>Galeria de fotos</h3>

            <div className={styles.fotos}>
                <img src="imagem1.png" alt="Imagem 1" />
                <img src="imagem2.png" alt="Imagem 2" />
                <img src="imagem3.png" alt="Imagem 3" />
            </div>
        </div>
    )
}

export default Galeria;
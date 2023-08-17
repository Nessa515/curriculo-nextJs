import styles from './styles.module.css';

const Banner = () => {
    return(
       <div className={styles.banner}>
            <img className={styles.imagem} src="fundo.png" alt="Fundo do banner" />
            <img className={styles.fundo} src="Rectangle 2.png" alt="Plano de fundo" />
            <div className={styles.foto}>
                <img src="https://github.com/Nessa515.png" alt="" />
            </div>

            <h3>Vanessa Oliveira da Silva</h3>

            <div className={styles.logo}>
                <img src="github.png" alt="Logo GitHub" />
                <img src="gitlab.png" alt="Logo GitLab" />
                <img src="linkedin.png" alt="Logo Linkedin" />
                <img src="instagram.png" alt="Logo Instragram" />
            </div>
       </div> 
    )
}

export default Banner;
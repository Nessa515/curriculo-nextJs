import styles from './styles.module.css';


const Cabecalho = () => {
    return(
        <header className={styles.cabecalho}>
            <nav>
                <ul>
                    <li>Inicio</li>
                    <li>Formação</li>
                    <li>Projetos</li>
                </ul>
            </nav>
        </header>
    )
}

export default Cabecalho;
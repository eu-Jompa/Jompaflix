import styles from "./Header.module.css";


function Header(){
    return(
        <header className={styles.header}>
            <span className=""> JompaFlix</span>
            <nav className="">
                <a href="#">Home</a>
                <a href="#">Assistir</a>
            </nav>
        </header>
    )
}

export default Header;
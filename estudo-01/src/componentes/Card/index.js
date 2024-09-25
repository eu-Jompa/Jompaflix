import styles from "./Card.module.css"

function Card({id}){
    return(
        <section ClassName= {styles.card}>
            <a href={`https://www.youtube.com/watch?v=${id}`} rel="noreferrer noonpener" target="_blank">
                <img src={`https://i.ytimg.com/vi/${id}/mqdefault.jpg`} alt="capa" />
            </a>
        </section>
    )  
}

export default Card;
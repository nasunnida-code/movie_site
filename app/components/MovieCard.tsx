// 영화데이터 -> Movie

import { Movie } from "../types/movie"
import styles from './MovieCard.module.css'

type MovieCardProps = {
    movie:Movie
}

function MovieCard({movie}:MovieCardProps){
    return <div className={styles.card}>
        <img src={movie.image} alt={movie.title} className={styles.image}/>
        <div className={styles.body}>
            <h3 className={styles.title}>{movie.title}</h3>
            <p>{movie.description}</p>
            <p className={styles.meta}>
                {movie.director} {movie.year}
            </p>
        </div>
        <div className={styles.footer}>
            <span className={styles.genre} >{movie.genre}</span>
            <span className={styles.rating} >{movie.rating}</span>
        </div>
        
    </div>
}

export default MovieCard
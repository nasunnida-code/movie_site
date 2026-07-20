import moivesData from '../data/movies.json'
import { Movie } from '../types/movie'
import MovieCard from '../components/MovieCard'
// 영화데이터가 들어있는 배열타입
const moives: Movie[] = moivesData

export default function MoviesPage(){
    return <div className='grid'>
        {/* MoiveCard에 영화데이터 뿌려주기 */}
        {
            moives.map((movie)=><MovieCard key={movie.id} 
            movie={movie}
            />)
        }
    </div>
}
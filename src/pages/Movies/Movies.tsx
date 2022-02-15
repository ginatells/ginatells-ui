import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import * as S from './styles'

function Movies() {
  const { movies } = useSelector((state: RootState) => state.game)
  const moviesList = movies.map((value: any, i: number) =>
  <S.MovieImage
    key={i}
    className='movie-image'
    src={`https://image.tmdb.org/t/p/w200${value.poster_path}`}
    alt="movie-poster"
  />
)
  return (
    <S.Movies className="image-list">
      {moviesList.length ?  moviesList : 'No Movies found!'}
    </S.Movies>
  )
}

export default Movies

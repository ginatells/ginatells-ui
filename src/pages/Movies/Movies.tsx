import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import * as S from './styles'

function Movies() {
  const { movies } = useSelector((state: RootState) => state.game)

  return (
    <S.Movies className="image-list">
      {movies.map((value: any, i: number) =>
        <S.MovieImage
          key={i}
          className='movie-image'
          src={`https://image.tmdb.org/t/p/w200${value.poster_path}`}
          alt="movie-poster"
        />
      )}
    </S.Movies>
  )
}

export default Movies

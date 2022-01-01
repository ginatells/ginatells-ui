import { useState } from 'react'
import { ALTERNATIVES } from '../utils/constants'
import { QUESTIONS } from '../utils/questions'
import Question from '../components/Question'
import Gina from '../images/gina.png'
import questionsService from '../services/questionsService'

import './Game.scss'

type Keyword = {
  weight: number;
  keyword: string;
};

function Game() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [keywords, setKeywords] = useState<Array<Keyword>>([]);
  const [movies, setMovies] = useState([]);

  async function selectOption(value: any) {
    QUESTIONS[questionIndex].keyword.forEach(element => {
     const keyword: Keyword = keywords.find((key: any) => (key.keyword === element))!;


      if (keyword) {
        keyword.weight = keyword.weight + value;
      } else {
        keywords.push({
          keyword: element,
          weight: value
        })
      }
    });
    setKeywords(keywords);
    if (questionIndex < 4) {
      setQuestionIndex(questionIndex+1);
    } 
    else{
      const response = await questionsService.postAnswer(keywords);
      setMovies(response?.data.results.map((value: any, i: number) => {
        return <img key={i} className='movie-image' src={`https://image.tmdb.org/t/p/w200${value.poster_path}`} alt="movie-poster"/>
      }));
    }
  }

  return (
    <div>
      <div className='game-container'>
        <img src={Gina} alt='Gina'/>
        <div>
          <Question text={QUESTIONS[questionIndex].text}/>
          <ul>
            <li onClick={() => selectOption(2)} className={'background-green'}>{ALTERNATIVES.HIGHEST}</li>
            <li onClick={() => selectOption(1)} className={'background-lightgreen'}>{ALTERNATIVES.HIGH}</li>
            <li onClick={() => selectOption(0)} className={'background-blue'}>{ALTERNATIVES.MEDIUM}</li>
            <li onClick={() => selectOption(-1)} className={'background-orange'}>{ALTERNATIVES.LOW}</li>
            <li onClick={() => selectOption(-2)} className={'background-red'}>{ALTERNATIVES.LOWEST}</li>
          </ul>
        </div>
      </div>
      <div className="image-list">
        {movies}
      </div>
    </div>
  )
}

export default Game

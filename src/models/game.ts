import { createModel } from '@rematch/core'
import type { RootModel } from './'
import { QUESTIONS } from '../utils/questions'
import questionsService from '../services/questionsService'

type Question = {
  text: string,
  keyword: Array<string>,
  relatedWords: Array<string>,
  value: any
}

type ComplexGameState = {
  questions: Array<Question>,
  currentQuestionIndex: number,
  movies: Array<any>
}

export const game = createModel<RootModel>()({
  state: {
    questions: QUESTIONS,
    currentQuestionIndex: 0,
    movies: [],
    keywords: [],
  } as ComplexGameState,
  reducers: {
    update(state: any, payload: any) {
      return { ...state, ...payload }
    }
  },
  effects: (dispatch: any) => ({
    async answerQuestion({ keywords }: any, rootState: any) {
      if (rootState.game.currentQuestionIndex < 4)
        return dispatch.game.update({ currentQuestionIndex: ++rootState.game.currentQuestionIndex })
      try {
        const res = await questionsService.postAnswer(keywords)
        const movies = res?.data?.results
        movies && dispatch.game.update({ movies })
        dispatch()
      } catch (err) {
        throw err
      }
    }
  })
})

export default game

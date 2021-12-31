import { createModel } from '@rematch/core'
import type { RootModel } from './'

type Names = 'custom'
type ComplexCountState = {
	count: number
	multiplierName: Names
}

export const session = createModel<RootModel>()({
  state: {
    count: 0
  } as ComplexCountState, // initial state
  reducers: {
    update (state: any, payload: any) {
      return { ...state, ...payload }
    }
  },
  effects: (dispatch: any) => ({
    // handle state changes with impure functions.
    // use async/await for async actions
    increment({ count }: any, rootState: any) {
      const newData = {
        count: rootState.session.count + count
      }
      dispatch.session.update(newData)
    },
  })
})

export default session

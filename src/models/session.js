const session = {
  state: {
    count: 0
  }, // initial state
  reducers: {
    update (state, payload) {
      return { ...state, ...payload }
    }
  },
  effects: dispatch => ({
    // handle state changes with impure functions.
    // use async/await for async actions
    increment({count}, rootState) {
      const newData = {
        count: rootState.session.count + count
      }
      dispatch.session.update(newData)
    },
  }),
}
export default session

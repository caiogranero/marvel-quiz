const mutations = {
  addPoint (state) {
    state.userPoints += 1
  },

  removePoint (state) {
    state.userPoints -= 1
  },

  setCast (state, currentCast) {
    state.currentCast = currentCast
    state.round += 1
  },

  saveCasts (state, casts) {
    state.casts = casts
  }
}

export default mutations

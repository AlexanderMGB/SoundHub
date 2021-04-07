/*
export function someAction (context) {
}
*/
import SearchService from '../../services/SearchService'

export const getItemsByName = async ({ commit }, payload) => {
  try {
    commit('setLoading', true)
    const response = await SearchService.getItemsByName(payload)
    commit('setSearchResults', response.data)
    commit('setLoading', false)
    return response
  } catch (error) {
    console.log(error)
  }
}

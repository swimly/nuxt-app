export const state = () => ({
  isCollapse: true,
  aside: null,
  currentParent: '/',
  currentChildren: '/'
})

export const mutations = {
  toggleCollapse (state) {
    state.isCollapse = !state.isCollapse
  },
  setAside (state, props) {
    state.aside = props
  },
  setParent (state, props) {
    state.currentParent = props
  },
  setChildren (state, props) {
    state.currentChildren = props
    console.log(props)
  }
}
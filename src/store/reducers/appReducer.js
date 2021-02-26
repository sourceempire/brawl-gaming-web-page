const initState = {
  navBgShown: false,
}

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_NAV_BG_VISIBILITY':
      return {...state, navBgShown: action.shown}
    default:
      return state;
  }
}

export default appReducer;
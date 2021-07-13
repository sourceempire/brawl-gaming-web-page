const initState = {
  navigation: {
    transparent: false
  }
}

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_TRANSPARENT_NAVIGATION':
      
      return {
        ...state, 
        navigation: { 
          ...state.navigation,
          transparent: action.transparent 
        }
      }
    default:
      return state;
  }
}

export default appReducer;
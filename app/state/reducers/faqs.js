import * as types from '../actions/actionTypes'

const initialState = {
  faqsLoaded: false,
  faqs: []
}

const faqs = (state = initialState, action) => {
  switch (action.type) {
    // case types.START_GAME:
    //   return  {
    //     ...state,
    //     activeGame: true
    //   }
    // case types.RESET_GAME:
    //   return  {
    //     ...state,
    //     gameSquares: action.gameSquares
    //   }
    default:
      return state
  }
}


export default faqs

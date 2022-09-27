var initialState = {
  balls:[],
  abcd:12,
  pqr:'praveen',
  ground:'uppal stadium'
}
function scoreReducer(state=initialState,action){
  if(action.type==='ADDBALL'){
    return {...state,balls:[...state.balls,action.payload]}
  }
  return state
}
export default scoreReducer;
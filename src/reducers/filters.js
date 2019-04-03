const filterReducerDefaultStore = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  EndDate: undefined
}

export default (state = filterReducerDefaultStore, action) => {
  switch (action.type) {
    case 'SET_TEXT':
      return {
        ...state,
        text: action.text
      }
    case 'SORT_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      }
    case 'SORT_DATE':
      return {
        ...state,
        sortBy: 'date'
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.date
      }
    case 'SET_END_DATE':
      return {
        ...state,
        startDate: action.date
      }
    default:
      return state
  }
}

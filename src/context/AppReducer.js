// Reducer is a function that returns state data
// Describes how your state is transfered to the next state
// Tells our store what to do with the data

export default (state, action) => {
    switch(action.type) {
        case "ADD_MOVIE_TO_WATCHLIST":
            return {
                ...state,
                watchlist:[action.payload, ...state.watchlist]
            };
        case "REMOVE_MOVIE_FROM_WATCH_LIST":
            return {
                ...state,
                watchlist:state.watchlist.filter(movie =>movie.id !== action.payload)
            }
        case "OPEN_MODAL":
            return {
                ...state,
                isModalOpen:!state.isModalOpen   
            }
            case "CLOSE_MODAL":
            return {
                ...state,
                isModalOpen:!state.isModalOpen   
            }
        default:
            return state;
    }
}

const initialBook = [];
export default (state = initialBook, action) => {
    switch (action.type) {
        case "ADD_INITIAL_BOOK_ENTRY":
            return [...action.payload]
            break;
        case "ADD_BOOK_ENTRY":
            return [...state.slice(0, 50), action.payload]
            break;
        default:
            return state;
            break;
    }
}

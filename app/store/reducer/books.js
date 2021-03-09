import { BOOK_ACTION_CONSTANTS, LOCAL_STORAGE_KEY } from './../constants/index'

const emptyBook = {
    bids: {},
    asks: {},
    bidsPrices: [],
    asksPrices: []
};

const getDefaultValues = () => {

        try {

            const previousData = localStorage.getItem(LOCAL_STORAGE_KEY);

            if (previousData !== null) {
             return JSON.parse(previousData);
            }
            else {
                return emptyBook;
            }

        }

        catch(err) {
            return emptyBook;
        }

}


const setDefaultValues = (data) => {
    try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
    }
    catch(err) {
        console.log(`Error in Saving data to localstorage: ${err}`)
    }
}

const removeDefaultValues = () => {
    try {
        localStorage.removeItem(LOCAL_STORAGE_KEY);
    }
    catch(err) {
        console.log(`Error in Saving data to localstorage: ${err}`)
    }
}

let initialBook = getDefaultValues();

export default (state = initialBook, action) => {
    switch (action.type) {
        case BOOK_ACTION_CONSTANTS.ADD_INITIAL_BOOK_ENTRY:
            let initialBook = {
                bids: {},
                asks: {}
            }
            action.payload.map((entry) => {
                let pp = { price: entry[0], cnt: entry[1], amount: entry[2] }
                const side = pp.amount >= 0 ? 'bids' : 'asks'
                pp.amount = Math.abs(pp.amount)
                initialBook[side][pp.price] = pp
            });
            let bidsPrices = Object.keys(initialBook['bids']).sort((a, b) => b - a);
            let asksPrices = Object.keys(initialBook['asks']).sort((a, b) => a - b);
            initialBook.bidsPrices = bidsPrices//.slice(0, 24);
            initialBook.asksPrices = asksPrices//.slice(0, 24);
            setDefaultValues(initialBook);
            return initialBook;
            break;
        case BOOK_ACTION_CONSTANTS.UPDATE_BOOK_ENTRY: {
            // Create a new Object and ensure that bids and asks has new array.
            let book = {
                bids: {...state.bids},
                asks: {...state.asks}
            };

            let pp = { price: action.payload[0], cnt: action.payload[1], amount: action.payload[2] }
            if (!pp.cnt) {

                if (pp.amount > 0) {

                    if (book['bids'][pp.price]) {
                        delete book['bids'][pp.price]
                    }
                }
                else if (pp.amount < 0) {

                    if (book['asks'][pp.price]) {
                        delete book['asks'][pp.price]
                    }

                }
            }
            else {

                let side = pp.amount >= 0 ? 'bids' : 'asks'
                pp.amount = Math.abs(pp.amount)
                book[side][pp.price] = pp

            }
            let bidsPrices = Object.keys(book['bids']).sort((a, b) => b - a);
            let asksPrices = Object.keys(book['asks']).sort((a, b) => a - b);
            book.bidsPrices = bidsPrices//.slice(0, 24);
            book.asksPrices = asksPrices//.slice(0, 24);
            setDefaultValues(book);
            return book;
            break;
        }
        case BOOK_ACTION_CONSTANTS.CLEAR_BOOK_DEFAULT_ENTRIES:
            removeDefaultValues();
            return state;
            break;
        case BOOK_ACTION_CONSTANTS.CLEAR_BOOK_ENTRIES:
            return emptyBook;
            break;
        default:
            return state;
            break;
    }
}

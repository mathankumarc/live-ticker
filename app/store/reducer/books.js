import { BOOK_ACTION_CONSTANTS } from './../constants/index'

const initialBook = {
    bids: [],
    asks: [],
    bidsPrices: [],
    asksPrices: []
};

export default (state = initialBook, action) => {
    switch (action.type) {
        case BOOK_ACTION_CONSTANTS.ADD_INITIAL_BOOK_ENTRY:
            let initialBook = {
                bids: [],
                asks: []
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
            return initialBook;
            break;
        case BOOK_ACTION_CONSTANTS.UPDATE_BOOK_ENTRY: {
            // Create a new Object and ensure that bids and asks has new array.
            let book = {
                bids: [].concat(state.bids),
                asks: [].concat(state.asks)
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
            return book;
            break;
        }
        default:
            return state;
            break;
    }
}

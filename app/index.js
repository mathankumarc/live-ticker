import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import BookReducer from './store/reducer/index'
import './css/index.scss'
import Bookasks from './component/Bookasks'
import Bookbids from './component/Bookbids'
import Bookheader from './component/Bookheader/Bookheader'
import store from './store/store'

let isfirstData = true;
let Book = {};
Book.asks = {};
Book.bids = {};

// Create WebSocket connection.
/*const socket = new WebSocket('wss://api-pub.bitfinex.com/ws/2');

// Connection opened
socket.addEventListener('open', function (event) {
    console.log('Hello Server!');
    socket.send(JSON.stringify({"event":"subscribe","channel":"book","symbol":"tBTCUSD"}));
});

// Listen for messages
socket.addEventListener('message', function (event) {
    //console.log('Message from server ', event.data);
    //console.log(JSON.parse(event));
    let parsedData = JSON.parse(event.data);
    //console.log(parsedData);
    //return;
    if (parsedData instanceof Array) {
        if (isfirstData) {
            //store.dispatch({type: 'ADD_INITIAL_BOOK_ENTRY', payload: parsedData[1]});
            //console.log(parsedData[1]);
            parsedData[1].map((entry) => {
                let pp = { price: entry[0], cnt: entry[1], amount: entry[2] }
                const side = pp.amount >= 0 ? 'bids' : 'asks'
                pp.amount = Math.abs(pp.amount)
                Book[side][pp.price] = pp
            });
            isfirstData = false;
        }
        else {
            //store.dispatch({type: 'ADD_BOOK_ENTRY', payload: parsedData[1]});
            let msg = parsedData[1];
            let pp = { price: msg[0], cnt: msg[1], amount: msg[2] }

            if (!pp.cnt) {
              let found = true
      
              if (pp.amount > 0) {
                if (Book['bids'][pp.price]) {
                  delete Book['bids'][pp.price]
                } else {
                  found = false
                }
              } else if (pp.amount < 0) {
                if (Book['asks'][pp.price]) {
                  delete Book['asks'][pp.price]
                } else {
                  found = false
                }
              }
      
              if (!found) {
               // fs.appendFileSync(logfile, '[' + moment().format() + '] ' + pair + ' | ' + JSON.stringify(pp) + ' BOOK delete fail side not found\n')
              }
            } else {
              let side = pp.amount >= 0 ? 'bids' : 'asks'
              pp.amount = Math.abs(pp.amount)
              Book[side][pp.price] = pp
            }
        }
    }
    console.log(Book);
});*/

function App() {
    return (
        <Provider store={store}>
            <Bookheader></Bookheader>
            <div id="books-container" className="books-container">
                <Bookbids></Bookbids>
                <Bookasks></Bookasks>
            </div>
        </Provider>
    );
}

ReactDOM.render(<App/>, document.getElementById('app-root'));


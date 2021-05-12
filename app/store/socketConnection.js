import { eventChannel } from 'redux-saga';
import { BOOK_ACTION_CONSTANTS } from './constants/index';

export default (precison = 'P0', isPrecisionChanged = false) => {
  console.log(precison);
  // Create WebSocket connection.
  return eventChannel((emitter) => {
    let ws;

    // To Re-try the scoket after it closes or reults in error.
    const retrySocket = () => {
      setTimeout(() => {
        makeSocketConnection();
      }, 10000);
    };

    // Initiate the Scoket connection.
    const makeSocketConnection = () => {
      ws = new WebSocket('wss://api-pub.bitfinex.com/ws/2');
      let firstDataProcessed = false;

      ws.onopen = () => {
        console.log('opening...');
        ws.send(JSON.stringify({
          event: 'subscribe', channel: 'book', symbol: 'tBTCUSD', prec: precison,
        }));
      };

      ws.onerror = (error) => {
        console.log(`WebSocket error ${error}`);
        ws.close();
        retrySocket();
        // return emitter({ type: SOCKET_CONNECTION_CONSTANTS.ON_ERROR, payload: msg[1] });
      };

      ws.onclose = (event) => {
        console.log('Socket off');
        if (event.code !== 4000) {
          retrySocket();
        }
      };

      ws.onmessage = (e) => {
        let msg = null;

        try {
          msg = JSON.parse(e.data);
        } catch (e) {
          console.error(`Error parsing : ${e.data}`);
        }

        if (msg) {
          // console.log(msg);
          if (msg.event) return;

          if (msg[1] === 'cs' || msg[1] === 'hs' || msg[1] === 'hb') {
            console.log('In CS/HS');
            return;
          }

          if (!firstDataProcessed) {
            firstDataProcessed = true;
            return emitter({ type: BOOK_ACTION_CONSTANTS.ADD_INITIAL_BOOK_ENTRY, payload: msg[1] });
          }

          return emitter({ type: BOOK_ACTION_CONSTANTS.UPDATE_BOOK_ENTRY, payload: msg[1] });
        }
      };
    };

    // Create the Scoket.
    makeSocketConnection();

    // unsubscribe function
    return (code = 4000) => {
      console.log('Socket off');
      ws.close(code);
    };
  });
};

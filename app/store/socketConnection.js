import { eventChannel } from 'redux-saga'
import { BOOK_ACTION_CONSTANTS } from './constants/index'

export default () => {
    // Create WebSocket connection.
    return eventChannel(emitter => {
        const ws = new WebSocket('wss://api-pub.bitfinex.com/ws/2')
        let firstDataProcessed = false;
        ws.onopen = () => {
          console.log('opening...')
          ws.send(JSON.stringify({"event":"subscribe","channel":"book","symbol":"tBTCUSD"}));
        }
        ws.onerror = (error) => {
          console.log('WebSocket error ' + error)
          console.dir(error)
        }
        ws.onmessage = (e) => {
          let msg = null
          try {
            msg = JSON.parse(e.data)
          } catch(e) {
            console.error(`Error parsing : ${e.data}`)
          }

          if (msg) {
              //console.log(msg);
              if (msg.event) return;
              if (!firstDataProcessed) {
                firstDataProcessed = true;
                return emitter({ type: BOOK_ACTION_CONSTANTS.ADD_INITIAL_BOOK_ENTRY, payload: msg[1] });
              }
              else {
                return emitter({ type: BOOK_ACTION_CONSTANTS.UPDATE_BOOK_ENTRY, payload: msg[1] });
              }
              return;
            const { payload: book } = msg
            const channel = msg.channel
            switch (channel) {
              case 'ADD_BOOK':
                return emitter({ type: ADD_BOOK, book })
              case 'REMOVE_BOOK':
                return emitter({ type: REMOVE_BOOK, book })
              default:
                // nothing to do
            }
          }
        }
        // unsubscribe function
        return () => {
          console.log('Socket off')
        }
      })
}
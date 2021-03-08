export const BOOK_ACTION_CONSTANTS = { 
    ADD_INITIAL_BOOK_ENTRY: 'ADD_INITIAL_BOOK_ENTRY',
    UPDATE_BOOK_ENTRY: 'UPDATE_BOOK_ENTRY'
};

export const LOCAL_STORAGE_KEY = 'bookData';

export const BOOK_TYPES = {
    BOOK_BIDS: 'BOOK_BIDS',
    BOOK_ASKS: 'BOOK_ASKS',
};

export const FLOAT_PRECISION_LENGTH = 4;

export const SETTINGS_MODAL_CONSTANTS = {
    SHOW_MODAL: 'SHOW_MODAL',
    HIDE_MODAL: 'HIDE_MODAL'
}

export const BOOK_VISUAL_SETTING_CONSTANTS = {
    SHOW_CUMULATIVE: 'SHOW_CUMULATIVE',
    SHOW_AMOUNT: 'SHOW_AMOUNT'
}

export const SOCKET_CONNECTION_CONSTANTS = {
    ON_ERROR: 'ON_SOCKET_ERROR'
}

export const PRECISION_SETTING_VALUES = [
    'P0',
    'P1',
    'P2',
    'P3',
    'P4'
];

export const COLUMN_ORDER_SETTING_ACTION = 'SET_BOOK_COLUMN_ORDER_OPTION';

export const COLUMN_ORDER_VALUES = [
    {
        'bids': [
            'cnt',
            'price',
            'amount',
            'total'
        ],
        'asks': [
            'total',
            'amount',
            'price',
            'cnt'
        ]
    },
    {
        'bids': [
            'cnt',
            'amount',
            'total',
            'price',
        ],
        'asks': [
            'price',
            'total',
            'amount',
            'cnt'
        ]
    },
    {
        'bids': [
            'cnt',
            'total',
            'price',
            'amount'
        ],
        'asks': [
            'amount',
            'price',
            'total',
            'cnt'
        ]
    }
];

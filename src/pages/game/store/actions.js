export const OPEN_WEBSOCKET_CONNECTION = 'open_websocket_connection';
export const CLOSE_WEBSOCKET_CONNECTION = 'close_websocket_connection';

export const SetWebsocket = (client)=>({
    type:OPEN_WEBSOCKET_CONNECTION,
    value:client
});

export const CloseWebsocket = ()=>({
    type:CLOSE_WEBSOCKET_CONNECTION
});

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

export const Host = 'http://47.75.109.171:8080/';
export const WebsocketHost = 'ws://47.75.109.171:8081/ws/three/';

export const OpenMongolia = ()=>{
    let MongolianScreen = document.getElementById('MongolianScreen');
    MongolianScreen.className = MongolianScreen.className.replace(/CloseMongolian/,'ShowMongolian');
};

export const CloseMongolia = ()=>{
    let MongolianScreen = document.getElementById('MongolianScreen');
    MongolianScreen.className = MongolianScreen.className.replace(/ShowMongolian/,'CloseMongolian');
};

export const OpenGameMongolia = ()=>{
    let MongolianScreen = document.getElementById('GameMongolianScreen');
    MongolianScreen.className = MongolianScreen.className.replace(/CloseMongolian/,'ShowMongolian');
};

export const CloseGameMongolia = ()=>{
    let MongolianScreen = document.getElementById('GameMongolianScreen');
    MongolianScreen.className = MongolianScreen.className.replace(/ShowMongolian/,'CloseMongolian');
};

ReactDOM.render(<App />, document.getElementById('root'));
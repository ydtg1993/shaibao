import React from 'react';
import Loadable from 'react-loadable';
import Loading from "../component/loading";
import * as source from "../../resource";

const LoadableComponent = Loadable({
    loader: () => import('./'),
    loading(){
        /*preload source*/
        Promise.resolve().then(function () {
            for (let sourceKey in source) {
                let imgObj = new Image();
                imgObj.src = source[sourceKey];
            }
        });
        return <Loading/>
    }
});

export default () => <LoadableComponent/>
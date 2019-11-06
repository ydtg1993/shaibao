import React from 'react';
import Loadable from 'react-loadable';
import Loading from "../component/loading";
import * as source from "../../resource";

const LoadableComponent = Loadable({
    loader: () => import('./'),
    loading(){
        /*preload source*/
        let interval = setInterval(function () {
            [
                source.img_money_input_bg,
                source.img_money_charge,
                source.img_money_gold_tag,
                source.img_game_cup_base,
                source.img_game_cup_cover,
                source.img_congratulate_title,
                source.img_congratulate_hikaru,
                source.img_congratulate_coin,
                source.img_home_bg,
                source.img_home_bottom_bg,
                source.img_game_section1,
                source.img_game_section4,
                source.img_game_period_bg,
                source.img_game_period_dice_base
            ].map(function (data) {
                let imgObj = new Image();
                imgObj.src = data;
            });
            clearInterval(interval)
        },1000);
        return <Loading/>
    }
});

export default () => <LoadableComponent/>
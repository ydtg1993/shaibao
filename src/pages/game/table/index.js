import React from 'react';
import {
    TableWrapper,
    Up,
    Down,
    Left,
    Plate,
    SPlate,
    Text,
    SText,
    SSText,
    Middle,
    Title,
    TimeLine,
    Period,
    Pan,
    Right,
} from './style';
import da from '../../../resource/youxijiemian/da.png';
import xiao from '../../../resource/youxijiemian/xiao.png';
import dan from '../../../resource/youxijiemian/dan.png';
import shuang from '../../../resource/youxijiemian/shuang.png';
import t4 from '../../../resource/youxijiemian/4.png';
import t5 from '../../../resource/youxijiemian/5.png';
import t6 from '../../../resource/youxijiemian/6.png';
import t7 from '../../../resource/youxijiemian/7.png';
import t8 from '../../../resource/youxijiemian/8.png';
import t9 from '../../../resource/youxijiemian/9.png';
import t10 from '../../../resource/youxijiemian/10.png';
import t11 from '../../../resource/youxijiemian/11.png';
import t12 from '../../../resource/youxijiemian/12.png';
import t13 from '../../../resource/youxijiemian/13.png';
import t14 from '../../../resource/youxijiemian/14.png';
import t15 from '../../../resource/youxijiemian/15.png';
import t16 from '../../../resource/youxijiemian/16.png';
import t17 from '../../../resource/youxijiemian/17.png';

class TableComponent extends React.Component{
    render() {
        return (
            <TableWrapper>
                <Up>
                    <Left>
                        <Plate><Text src={da}/></Plate>
                        <Plate><Text src={xiao}/></Plate>
                    </Left>
                    <Middle>
                        <Period>
                            <Title>0808期截止时间</Title>
                            <TimeLine>00:00:00</TimeLine>
                        </Period>
                        <Pan/>
                    </Middle>
                    <Right>
                        <Plate><Text src={dan}/></Plate>
                        <Plate><Text src={shuang}/></Plate>
                    </Right>
                </Up>
                <Down>
                    <SPlate><SText src={t4}/></SPlate>
                    <SPlate><SText src={t5}/></SPlate>
                    <SPlate><SText src={t6}/></SPlate>
                    <SPlate><SText src={t7}/></SPlate>
                    <SPlate><SText src={t8}/></SPlate>
                    <SPlate><SText src={t9}/></SPlate>
                    <SPlate><SSText src={t10}/></SPlate>
                    <SPlate><SSText src={t11}/></SPlate>
                    <SPlate><SSText src={t12}/></SPlate>
                    <SPlate><SSText src={t13}/></SPlate>
                    <SPlate><SSText src={t14}/></SPlate>
                    <SPlate><SSText src={t15}/></SPlate>
                    <SPlate><SSText src={t16}/></SPlate>
                    <SPlate><SSText src={t17}/></SPlate>
                </Down>
            </TableWrapper>
        )
    }
}

export default TableComponent;
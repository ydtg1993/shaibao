import React from 'react';
import {
    TableWrapper,
    Up,
    Down,
    Left,
    Plate,
    SPlate,
    Middle,
    Period,
    Pan,
    Right,
} from './style';

class TableComponent extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TableWrapper>
                <Up>
                    <Left>
                        <Plate></Plate>
                        <Plate></Plate>
                    </Left>
                    <Middle>
                        <Period/>
                        <Pan/>
                    </Middle>
                    <Right>
                        <Plate></Plate>
                        <Plate></Plate>
                    </Right>
                </Up>
                <Down>
                    <SPlate></SPlate>
                    <SPlate></SPlate>
                    <SPlate></SPlate>
                    <SPlate></SPlate>
                    <SPlate></SPlate>
                    <SPlate></SPlate>
                    <SPlate></SPlate>
                    <SPlate></SPlate>
                    <SPlate></SPlate>
                    <SPlate></SPlate>
                    <SPlate></SPlate>
                    <SPlate></SPlate>
                    <SPlate></SPlate>
                    <SPlate></SPlate>
                </Down>
            </TableWrapper>
        )
    }
}

export default TableComponent;
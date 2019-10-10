import React from 'react';
import {connect} from 'react-redux';
import {RecordDialog,Close,RecordTitle,RecordList,Record,TextBlock,Title} from './style';

class RecordComponent extends React.Component {
    render() {
        const {visible,recordList} = this.props;
        return (
                <RecordDialog className={visible ? 'show fadeInLeft faster animated' : 'hidden'}>
                    <div>
                        <Close onClick={this.props.CloseRecordDialog}/>
                        <RecordTitle><Title/></RecordTitle>
                    </div>
                    <RecordList>
                        {recordList && recordList.map(function (data,index) {
                            return (<Record key={data.id} className={index%2 === 1?'even':''}>
                                <div>{data.sequence}期</div>
                                <div>{data.result}</div>
                                <div>
                                    <TextBlock className={data.big ? 'yellow':'green'}>{data.big ? '大':'小'}</TextBlock>
                                    <TextBlock className={data.even ? 'purple':'yellow'}>{data.even ? '双':'单'}</TextBlock>
                                    <TextBlock>{data.sum}</TextBlock>
                                </div>
                            </Record>)
                        })}
                    </RecordList>
                </RecordDialog>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        recordList:state.game.get('recordList')
    }
};

export default connect(mapStateToProps,  null)(RecordComponent)
import React from 'react';
import "animate.css";
import {connect} from 'react-redux';
import {RecordDialog,Close,RecordTitle,RecordList,Record,TextBlock} from './../style';
import close from '../../../../resource/youxijiemian/record/guanbi.png';
import title from '../../../../resource/youxijiemian/record/title.png';

class RecordComponent extends React.Component {
    render() {
        const {visible,recordList} = this.props;
        return visible && (
            <React.Fragment>
                <RecordDialog className={visible ? 'show fadeInLeft faster animated' : ''}>
                    <div>
                        <Close src={close} onClick={this.props.CloseRecordDialog}/>
                        <RecordTitle><img src={title}/></RecordTitle>
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
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        recordList:state.game.get('recordList')
    }
};

export default connect(mapStateToProps,  null)(RecordComponent)
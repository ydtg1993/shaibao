import  React from 'react';
import './loading.css'

const Loading = (props)=> (
    <div className="loader">
        <div className="loader-inner">
            <div className="loader-line-wrap">
                <div className="loader-line"></div>
            </div>
            <div className="loader-line-wrap">
                <div className="loader-line"></div>
            </div>
            <div className="loader-line-wrap">
                <div className="loader-line"></div>
            </div>
            <div className="loader-line-wrap">
                <div className="loader-line"></div>
            </div>
            <div className="loader-line-wrap">
                <div className="loader-line"></div>
            </div>
        </div>
    </div>
);

export default Loading;
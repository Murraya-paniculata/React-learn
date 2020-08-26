import React from 'react';
import './Pager.css';

/**
 * 
 * @param {*} total 总数据量
 * @param {*} limit 页容量
 */
function getPageNumber(total, limit) {
    return Math.ceil(total / limit)
}

function getMinNumber(current, panelNumber) {
    const min = current - Math.floor(panelNumber / 2);
    if(min<1) {
        return 1;
    }
    return min;
}

function getMaxNumber(min, panelNumber, pageNumber) {
    const max = min + panelNumber - 1;
    if(max>pageNumber) {
        return pageNumber;
    }
    return max;
}

function toPage(index, props) {
    if(props.current === index) return;
    props.onPageChange && props.onPageChange(index);
}

export default function Pager (props) {
    const pageNumber = getPageNumber(props.total, props.limit);
    const min = getMinNumber(props.current, props.panelNumber);
    const max = getMaxNumber(min, props.panelNumber, pageNumber);
    const numbers = [];
    for (let index = min; index <= max; index++) {
        numbers.push(<span key={index} onClick={() => (toPage(index, props))} className={index===props.current?'item active': 'item'}>{index}</span>)
    }
    return (
        <>
            <span className={props.current === 1 ? 'item disabled' : 'item'} onClick={() => (toPage(1, props))}>首页</span>
            <span className={props.current === 1 ? 'item disabled' : 'item'} onClick={() => (toPage(props.current - 1 < 1 ? 1 : props.current - 1, props))}>上一页</span>
            {numbers}
            <span className={props.current === pageNumber ? 'item disabled' : 'item'} onClick={() => (toPage(props.current + 1 > pageNumber ? pageNumber : props.current + 1, props))}>下一页</span>
            <span className={props.current === pageNumber ? 'item disabled' : 'item'} onClick={() => toPage(pageNumber, props)}>尾页</span>
            <span className="current">{props.current}</span> / 
            <span>{pageNumber}</span>
        </>
    )
}

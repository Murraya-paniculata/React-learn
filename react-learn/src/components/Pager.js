import React from 'react'
import "./Pager.css"

/**
 * 分页组件
 * 属性
 * 1. current：出世页码
 * 2. total： 总数据量
 * 3. limit：每页条数，每页显示的数量
 * 4. panelNumber：数字野马最多显示多少个
 * 5. onPageChange: 当夜吗改变的事件
 * 
 * 状态：
 * 1. current：当前页码 
 */

export default function Pager(props) {
    const pageNumber = getPageNumber(props);
    return (
        <>
            <span onClick={toPage(1, props)} className={props.current === 1 ? "item disabled" : 'item'}>首页</span>
            <span className={props.current === 1 ? "item disabled" : 'item'}>上一页</span>
            <span className={props.current === pageNumber ? "item disabled" : 'item'}>下一页</span>
            <span className={props.current === pageNumber ? "item disabled" : 'item'}>尾页</span>
            <span>{props.current}</span>/ <span>{pageNumber}</span>
        </>
    )
}

/**
 * 计算总数据量
 * @param {*} props
 * 
 */
function getPageNumber(props) {
    return Math.ceil(props.total / props.limit);
}
/**
 * 
 * @param {*} target 目标页码
 * @param {*} props 所有属性
 */
function toPage(target, props) {
    if(props.current === target) return;
    props.onPageChange && props.onPageChange(target)
}

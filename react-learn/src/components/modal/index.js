import React from 'react';
import './index.css';

export default function Modal(props) {

    let defaultProps = { //默认属性
        bg: "rgba(0,0,0,0.5)"
    };
    let datas = { ...defaultProps, ...props }

    return (
        <div onClick={e => {
            e.target.className === 'modal' && datas.onClose()
        }} className="modal" style={{
            background: datas.bg
        }}>
            <div className="modal-center">
                {datas.children}
            </div>
        </div>
    )
}

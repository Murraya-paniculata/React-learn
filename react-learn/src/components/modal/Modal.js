import React from 'react'
import './Modal.css'

export default function Modal(props) {
    if(!props.isLoading) return null;
    return (
        <div class="modalWarp">
            <p>加载中...</p>
        </div>
    )
}

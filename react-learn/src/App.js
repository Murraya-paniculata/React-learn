import React from 'react'
import ThreeLayout from './components/common/threeLayout'

export default function App() {
    return (
        <div>
            <ThreeLayout left={
                <div>左边栏</div>
            } right={
                <div>右边栏</div>
            }>
                <div style={{
                    border: "2px solid #f40"
                }}>
                    <h1>主区域</h1>
                    <p>dshfhdafjsfjsdvjsdfkdsfkadfszksdfsdfwreasdj</p>
                </div>
            </ThreeLayout>
        </div>
    )
}

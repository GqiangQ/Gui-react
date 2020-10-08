import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Dialog, { alert, confirm }from './../Dialog/dialog'
import {Button} from '../global'

export default () => {
    const [x, setX] = useState(false)
    const box =<div>
        <button onClick={()=> setX(!x)} >Dialog</button>
        <button onClick={()=> alert('alert')} >alert</button>
        <button onClick={()=> confirm('confirm', ()=>{console.log('yes')}, ()=>{console.log('no')})} >confirm</button>
        <Dialog visible={x} buttons={[
            <Button onClick={()=> setX(false)}>确认</Button>,
        ]} closeOnclickMask onClose={()=> setX(false)}>Dialog</Dialog>
    </div>
    return (
        ReactDOM.createPortal(box,document.body)
    )
}
import React, { Fragment, FunctionComponent, ReactElement } from 'react'
import ReactDOM from 'react-dom'
import { Icon,Button } from '../global'
import prefix  from '../tools/prefixClass'
import './dialog.scss'
interface Props {
    visible: boolean, 
    buttons?:Array<ReactElement>,
    onClose: React.MouseEventHandler,
    closeOnclickMask?:boolean
}
const sc = prefix('dialog')

const Dialog:FunctionComponent<Props> = (props) => {
    const {visible, children, buttons, closeOnclickMask, onClose}  = props
    // 点击关闭icon
    const onclickClose:React.MouseEventHandler = (e) => {
        // onClose(e)
    }
    // 点击遮帐层
    const onclickMask:React.MouseEventHandler = (e) => {
        if (closeOnclickMask) onClose(e)
    }
    return(
        visible ?
        <Fragment>
            <div className={sc('mask')} onClick={onclickMask}></div>
            <div className={sc('')} >
                <div className={sc('close')} onClick={onclickClose}> <Icon name='close'  /></div>
                <header className={sc('header')}>
                    提示
                </header>
                <main className={sc('main')}>
                    {children}
                </main>
                <footer className={sc('footer')}>
                    {buttons?.map((item,index)=>{
                        console.log(React.cloneElement(item, {key:index}).props.onClick)    
                        return React.cloneElement(item, {key:index})
                    }
                    )}
                </footer>
            </div>
        </Fragment>
        :null
    )
}
Dialog.defaultProps = {
    closeOnclickMask:false
}
const alert = (content:string) => {
    const div = document.createElement('div')
    document.body.append(div)
    // document.body.append(div);
    const component = <Dialog visible={true} onClose={()=>{
        ReactDOM.render(React.cloneElement(component,{visable:false}),div)
        ReactDOM.unmountComponentAtNode(div)
        div.remove()
    }}>{content}</Dialog>
    ReactDOM.render(component,div)
}
const confirm = (content:string, yes?:()=>void, no?:()=>void, ) => {
    // 关闭窗口
    const closeDialog = () => {
        ReactDOM.render(React.cloneElement(component,{visable:false}),div)
        ReactDOM.unmountComponentAtNode(div)
        div.remove()
    }
    // 处理确认按钮
    const confirmHandle = () => {
        console.log('ok')
    }
    console.log(yes)
    // 处理取消按钮
    const cancelHandle = () => {
    }
    const div = document.createElement('div')
    document.body.append(div)
    const component = (
        <Dialog 
            visible={true} 
            onClose={closeDialog}
            buttons= {[
                <Button onClick={confirmHandle}>确认</Button>,
                <Button onClick={cancelHandle}>取消</Button>
            ]}
        >
            {content}
        </Dialog>)
    ReactDOM.render(component,div)
}
export { alert ,confirm}
export default Dialog
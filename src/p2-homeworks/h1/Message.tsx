import React from 'react'
import style from './Message.module.css'

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

const Message: React.FC<MessageType> = (props) => {
    return (
        <div className={style.message}>
            <img className={style.img} src={props.avatar}/>
            <div className={style.messageCorner}></div>
            <div className={style.messageBlock}>
                <div className={style.name}>{props.name}</div>
                <div className={style.text}>{props.message}</div>
                <div className={style.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
